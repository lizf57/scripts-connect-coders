const typeDefs = `

type Profile {
  _id: ID
  name: String!
  username: String!
  email: String!
  password: String!
  biography: String
  github: String
  stackOverflow: String
  linkedIn: String
  posts: [Post]
  avatar: String
}

input ProfileInput {
  _id: ID
  name: String
  username: String
  email: String
  password: String
  biography: String
  github: String
  stackOverflow: String
  linkedIn: String
  posts: [PostInput]
  avatar: String
  
}

type Post {
    _id: ID
    profile: Profile
    body: String
    createdAt: String
    likedBy: [ID]
    dislikedBy: [ID]
  }

  input PostInput {
    _id: ID
    profile: ProfileInput
    body: String
    createdAt: String
    likedBy: [ID]
    dislikedBy: [ID]
  }

  type Auth {
    token: ID!
    profile: Profile
  }
  
  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    posts(skip: Int): [Post]!
    post(postId: ID!): Post
  }
  
  type Mutation {
    addProfile(name: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateProfile(profileId: ID!, profile: ProfileInput!): Profile
    toggleLike(postId: ID!, profileId: ID!): Post
    toggleDislike(postId: ID!, profileId: ID!): Post

  
    
    addPost(profileId: ID!, post: String!): Profile
    removeProfile(profileId: ID!): Profile
    removePost(profileId: ID!, postId: ID!): Profile
  }
  `;
  
  module.exports = typeDefs;

  // TODO need to add updateProfile