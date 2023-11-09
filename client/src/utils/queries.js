import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
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
    }
  }
  
`;
