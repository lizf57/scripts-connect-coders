const { Profile, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
// Profile queries 
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate('posts')
    },

    post: async (parent, { postId }) => {
      return Post.findById(postId).populate('profile')
    },

    posts: async (parent, { skip=0 }) => {
      return Post.find().populate('profile').skip(skip).limit(5)
      // .sort({createdAt: -1})
    }

  },

  Mutation: {
    // Profile Mutations
    addProfile: async (parent, { name, email, username, password }) => {
      const profile = await Profile.create({ name, email, username, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },

    updateProfile: async (parent, { profileId, profile }) => {
      const currentUser = await Profile.findOne({ profileId })

      // if(profile.avatar) {
      //   if(currentUser.avatar) {
      //     await cloudinary.uploader.destroy(currentUser.avatar.split("/").pop().split(".")[0])
      //   }
      //   const uploadedProfilePhoto = await cloudinary.uploader.upload(avatar)
      //   profile.avatar = uploadedProfilePhoto.secure_url
      // }
      return Profile.findByIdAndUpdate(
        profileId,
        profile,
        // cloudinary set up structure
        
        {new: true}
      )
    },
    
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },

    // Post Mutations
    addPost: async (parent, { profileId , post }, context) => {
      if (context.user) {
        const newPost = await Post.create({ body: post, profile: context.user._id })

        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { posts: newPost._id  },
          },
          {
            new: true,
            runValidators: true,
          }
          );
        }
        throw AuthenticationError
    },

    toggleLike: async (parent, { postId, profileId }) => {
      const post = await Post.findById(postId)

      const likeOperator = post.likedBy.includes(profileId)
        ? "$pull" 
        : "$push"

      const updatePostData = {
        [likeOperator]: {likedBy: profileId},
      }

      const hasDisliked = post.dislikedBy.includes(profileId)

      if (hasDisliked) {
        updatePostData.$pull = {dislikedBy: profileId}
      }
         
      return(
        await Post.findByIdAndUpdate(postId, updatePostData, {
          new: true
        })
      )

    },
    toggleDislike: async (parent, { postId, profileId }) => {
      const post = await Post.findById(postId)

      const dislikeOperator = post.dislikedBy.includes(profileId)
        ? "$pull" 
        : "$push"

      const updatePostData = {
        [dislikeOperator]: {dislikedBy: profileId},
      }

      const hasLiked = post.likedBy.includes(profileId)

      if (hasLiked) {
        updatePostData.$pull = {likedBy: profileId}
      }
         
      return(
        await Post.findByIdAndUpdate(postId, updatePostData, {
          new: true
        })
      )
  },

    removePost: async (parent, { profileId, postId }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { posts: { _id: postId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
