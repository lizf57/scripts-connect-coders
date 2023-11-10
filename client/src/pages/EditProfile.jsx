import React from 'react'
import { Link, FormControl, FormLabel, Input, Flex, Text, Avatar, Wrap, WrapItem, Stack, Button } from '@chakra-ui/react'

import '../style.css'

const EditProfile = () => {

    const profileId = localStorage.getItem('profile_id')

  return (
    <>
    <Flex
    justifyContent={'center'}
    color={'white'}
    bg={'darkBlue'}
    w={'auto'}
    h={'auto'}
    alignItems={'center'}
    p={'30px'}
    >
    <Flex flexDir={'column'} w={'70vw'}>
        <Text mb={10} fontSize={'30px'} fontWeight={'700'} color={'lightPurple'}>Make changes to profile:</Text>

            <FormControl  mb={7}>
                <FormLabel>Name:</FormLabel>
                <Input placeholder='name' color={'whiteAlpha.500'} borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='name' type='text'/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Username:</FormLabel>
                <Input placeholder='username' color={'whiteAlpha.500'}  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='username' type='text'/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Email:</FormLabel>
                <Input placeholder='email' color={'whiteAlpha.500'}  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='email' type='text'/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Password:</FormLabel>
                <Input placeholder='password' color={'whiteAlpha.500'}  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='password' type='text'/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Biography:</FormLabel>
                <Input placeholder='bio' color={'whiteAlpha.500'}  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='bio' type='text'/>
            </FormControl>  

            <FormControl mb={7}>
                <FormLabel>Github Account:</FormLabel>
                <Input placeholder='Github URL' color={'whiteAlpha.500'}  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='github' type='text'/>
            </FormControl> 

            <FormControl mb={7}>
                <FormLabel>StackOverflow Account:</FormLabel>
                <Input placeholder='StackOverflow URL' color={'whiteAlpha.500'}  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='stackoverflow' type='text'/>
            </FormControl>  

            <FormControl mb={7}>
                <FormLabel>LinkedIn Account:</FormLabel>
                <Input placeholder='LinkedIn URL' color={'whiteAlpha.500'}  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='linkedin' type='text'/>
            </FormControl>   

            <FormControl  mb={7}>
                <FormLabel>Choose an Avatar:</FormLabel>
            <Wrap>
                <WrapItem>
                    <Avatar className='avatar' name='avatar1' size='lg' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar className='avatar' name='avatar2' size='lg' src='https://bit.ly/kent-c-dodds' />
                </WrapItem>
                <WrapItem>
                    <Avatar className='avatar' name='avatar3' size='lg' src='https://bit.ly/ryan-florence' />
                </WrapItem>
                <WrapItem>
                    <Avatar className='avatar' name='avatar4' size='lg' src='https://bit.ly/prosper-baba' />
                </WrapItem>
                <WrapItem>
                    <Avatar className='avatar' name='avatar5' size='lg' src='https://bit.ly/code-beast' />
                </WrapItem>
                <WrapItem>
                    <Avatar className='avatar' name='avatar6' size='lg' src='https://bit.ly/sage-adebayo' />
                </WrapItem>
                <WrapItem>
                    <Avatar className='avatar' name='avatar7' size='lg' src='/profiles/profile1.jpg' />
                </WrapItem>
                <WrapItem>
                    <Avatar className='avatar' name='avatar8' size='lg' src='/profiles/profile2.jpg' />
                </WrapItem>
                <WrapItem>
                    <Avatar className='avatar' name='avatar9' size='lg' src='/profiles/profile3.jpg' />
                </WrapItem>
                <WrapItem>
                    <Avatar className='avatar' name='avatar10' size='lg' src='/profiles/profile5.jpg' />
                </WrapItem>
                </Wrap>
            </FormControl>

            
            <Stack direction='row' spacing={4} mt={7}>
              <Button bg={'neonBlue'} variant='solid' type='submit'>
                Save Changes
              </Button>

              <Link href={`/profiles/${profileId}`}>
              <Button bg={'lightPurple'} variant='solid' type='submit'>
                Cancel
              </Button>
              </Link>
             
            </Stack>

            <Stack direction='row' justifyContent={'flex-end'} spacing={4} mt={7}>
              <Button bg={'gray'} variant='solid' type='submit'>
                Delete Profile
              </Button>
            </Stack>
            
    </Flex>
    </Flex>
    </>
  )
}

export default EditProfile