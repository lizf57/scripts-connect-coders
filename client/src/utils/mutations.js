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
// TODO: 
// export const UPDATE_PROFILE = gql`
//   mutation UpdateProfile($name: String!, $username: String!, $biography: String, $github: String, $stackOverflow: String, $linkedIn: String, $avatar: String) {
//     addProfile(name: $name, username: $username, biography: $biography, github: $github, stackOverflow: $stackOverflow, linkedIn: $linkedIn, avatar: $avatar) {
//       profile {
//         _id
//         name
//         username
//         biography
//         github
//         stackOverflow
//         linkedIn
//         avatar
//       }
//       token
//     }
//   }
// `;

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
