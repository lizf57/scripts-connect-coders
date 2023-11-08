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

// export const ADD_SKILL = gql`
//   mutation addSkill($profileId: ID!, $skill: String!) {
//     addSkill(profileId: $profileId, skill: $skill) {
//       _id
//       name
//       skills
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
