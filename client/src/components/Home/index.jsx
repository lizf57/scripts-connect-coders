import Typewriter from "typewriter-effect"
import { useState } from "react"
import { Flex, Input, Text, Button, Stack, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'

import './Home.css'

function Home() {

  

  return (
    <>
      <Flex>
        <Flex 
          bg={'darkBlue'} 
          w={'50vw'} 
          h={'100vh'} 
          justifyContent={'start'} 
          alignItems={'center'}
          p={'30px'}
          fontFamily={'sans-serif'}
          fontWeight={'800'}
          fontSize={'40px'}
          color={'lightPurple'}
        >
            {/* <img src="/images/script.png" className="logo-image" alt="logo-photo"/> */}
              <Typewriter
                  options={{
                    loop: true,
                  }}

                  onInit={(typewriter) => {
                      typewriter
                          .typeString("connecting coders")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("one script at a time.")
                          .pauseFor(1000)
                          .start();
                  }}
              />
          </Flex>
          
          <Flex 
            justifyContent={'end'}
            bg={'darkBlue'}
            w={'50vw'}
            h={'100vh'}
            alignItems={'center'}
            p={'30px'}
          >
            <Flex flexDir={'column'} w={'100vw'}>

              <Text mb={10} fontSize={'30px'} fontWeight={'700'} color={'lightPurple'}>
                Login
              </Text>

              <FormControl isRequired mb={7}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='email' borderColor={'neonBlue'} focusBorderColor={'lightPurple'}  />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder='password' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} />
              </FormControl>

              <Stack direction='row' spacing={4} mt={7}>
                <Button bg={'neonBlue'} variant='solid'>
                  Login
                </Button>
                <Button colorScheme='purple' borderColor={'lightPurple'} variant='outline'>
                  Sign Up
                </Button>
              </Stack>

            </Flex>

           
            
          </Flex>

        </Flex>

    </>
  )
}

export default Home
