const { Profile } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
// Profile queries 
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

  // Post queries
  // This doesnt work this way
  // posts: async () => {
  //   return Post.find();
  // },

  // post: async (parent, { postId }) => {
  //   return Post.findOne({ _id: postId });
  // },

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

    
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },

    // Post Mutations
    addPost: async (parent, { profileId , post }, context) => {
      if (context.user) {

        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { posts: post  },
          },
          {
            new: true,
            runValidators: true,
          }
          );
        }
        throw AuthenticationError
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
