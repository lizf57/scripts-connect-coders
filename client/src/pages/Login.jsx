import Typewriter from "typewriter-effect"
import { useState } from "react"
import { Flex, Input, Link, Text, Button, Stack, FormControl, FormLabel, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth'



const Login = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      
      Auth.login(data.login.token);
      console.log(token)
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  

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

              {data ? (
                <p>Success!</p>
              ) : (
                <form onSubmit={handleFormSubmit}>

                <FormControl isRequired mb={7}>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder='email' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='email' type='email' value={formState.email} onChange={handleChange} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder='password' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='password' type='password' value={formState.password} onChange={handleChange} />
                </FormControl>

                <Stack direction='row' spacing={4} mt={7}>
                  <Button bg={'neonBlue'} variant='solid' type='submit'>
                    Login
                  </Button>
                  <Link href='/signup'>
                    <Button colorScheme='purple' borderColor={'lightPurple'} variant='outline'>
                      Sign Up
                    </Button>
                  </Link>
                  
                </Stack>

                </form>

              )}

              {error && (
                <Alert variant='solid' bg={'lightPurple'} mt={8}>
                  <AlertIcon />
                  <AlertTitle>Error logging in!</AlertTitle>
                
                </Alert>
              )}


             

            </Flex>

           
            
          </Flex>

        </Flex>

    </>
  )
}

export default Login
