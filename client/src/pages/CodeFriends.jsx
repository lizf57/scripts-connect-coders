import { useState } from "react"
import { Flex, Input, Link, Text, Button, Stack, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from "../utils/queries";
import ProfileList from "../components/ProfileList";

import Auth from '../utils/auth'



const CodeFriends =  (props) => {

  const { loading, data } = useQuery(QUERY_PROFILES)
  console.log(data)
  const profiles = data?.profiles || []
  
  return (
    <>
     <div>
        {loading ? (
          <div>Loading...</div>
        ) : (

          <ProfileList
          profiles={profiles}
          >
          </ProfileList>
        )}
      </div>
    </>
  )
}

export default CodeFriends