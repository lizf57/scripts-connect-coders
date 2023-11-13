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
    posts: [String]!
  }

  type Post {
    _id: ID
    username: String
    body: String
    createdAt: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addPost(profileId: ID!, body: String!): Profile
    removeProfile(profileId: ID!): Profile
    removePost(profileId: ID!, postId: ID!): Profile
  }
`;

module.exports = typeDefs;
