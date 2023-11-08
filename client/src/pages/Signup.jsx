import { useState } from 'react';
import { Flex, Input, Link, Text, Button, Stack, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

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
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex 
    justifyContent={'center'}
    bg={'darkBlue'}
    w={'100vw'}
    h={'100vh'}
    alignItems={'center'}
    p={'30px'}
  >
    <Flex flexDir={'column'} w={'70vw'}>

        <Text mb={10} fontSize={'30px'} fontWeight={'700'} color={'lightPurple'}>
          Sign Up
        </Text>

        <FormControl isRequired mb={7}>
          <FormLabel>Name</FormLabel>
          <Input placeholder='name' borderColor={'neonBlue'} focusBorderColor={'lightPurple'}  />
        </FormControl>

        <FormControl isRequired mb={7}>
          <FormLabel>Username</FormLabel>
          <Input placeholder='email' borderColor={'neonBlue'} focusBorderColor={'lightPurple'}  />
        </FormControl>

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
            Sign Up
          </Button>
        </Stack>

      </Flex>

   
    
  </Flex>
    // <main className="flex-row justify-center mb-4">
    //   <div className="col-12 col-lg-10">
    //     <div className="card">
    //       <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
    //       <div className="card-body">
    //         {data ? (
    //           <p>
    //             Success! You may now head{' '}
    //             <Link to="/">back to the homepage.</Link>
    //           </p>
    //         ) : (
    //           <form onSubmit={handleFormSubmit}>
    //             <input
    //               className="form-input"
    //               placeholder="Your username"
    //               name="name"
    //               type="text"
    //               value={formState.name}
    //               onChange={handleChange}
    //             />
    //             <input
    //               className="form-input"
    //               placeholder="Your email"
    //               name="email"
    //               type="email"
    //               value={formState.email}
    //               onChange={handleChange}
    //             />
    //             <input
    //               className="form-input"
    //               placeholder="******"
    //               name="password"
    //               type="password"
    //               value={formState.password}
    //               onChange={handleChange}
    //             />
    //             <button
    //               className="btn btn-block btn-info"
    //               style={{ cursor: 'pointer' }}
    //               type="submit"
    //             >
    //               Submit
    //             </button>
    //           </form>
    //         )}

    //         {error && (
    //           <div className="my-3 p-3 bg-danger text-white">
    //             {error.message}
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default Signup;
