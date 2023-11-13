import Typewriter from "typewriter-effect"
import { useState } from "react"
import { Flex, Input, Link, Text, Button, Stack, FormControl, FormLabel, FormErrorMessage, FormHelperText, Box } from '@chakra-ui/react'
import { useQuery } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth'



const Home = () => {

  return (
    <>
      <Box p={4}>
      <Text textAlign={'center' }>Placeholder</Text>
      </Box>
    </>
  )
}

export default Home