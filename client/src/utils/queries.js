import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      username
      biography
      posts
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query Profile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      username
      biography
      email
      github
      linkedIn
      stackOverflow
      posts
      avatar
    }
  }
  
`;

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      body
      createdAt
      username
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query Post($postId: ID!) {
    post(postId: $postId) {
      _id
      body
      createdAt
      username
    }
  }
`