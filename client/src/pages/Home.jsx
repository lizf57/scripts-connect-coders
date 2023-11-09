import Typewriter from "typewriter-effect"
import { useState } from "react"
import { Flex, Input, Link, Text, Button, Stack, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import { useQuery } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { QUERY_PROFILES } from "../utils/queries";
import ProfileList from "../components/ProfileList";

import Auth from '../utils/auth'



const Home = (props) => {

  const { data } = useQuery(QUERY_PROFILES)

  const profiles = data?.profiles || []
  
  return (
    <>
      <ProfileList
        profiles={profiles}
      >
      </ProfileList>
    </>
  )
}

export default Home