import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation AddProfile($name: String!, $username: String!, $email: String!, $password: String!) {
    addProfile(name: $name, username: $username, email: $email, password: $password) {
      profile {
        _id
        name
      }
      token
    }
  }
`;
 
export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($profileId: ID!, $profile: ProfileInput!) {
    updateProfile(profileId: $profileId, profile: $profile) {
      _id
      name
      email
      password
      username
      biography
      github
      stackOverflow
      linkedIn
      avatar
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      profile {
        _id
        name
      }
      token
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($profileId: ID!, $post: String!) {
    addPost(profileId: $profileId, post: $post) {
      _id
    }
  }
`;

export const REMOVE_PROFILE = gql`
mutation removeProfile($profileId: ID!) {
  removeProfile(profileId: $profileId) {
    _id
  }
}
`;