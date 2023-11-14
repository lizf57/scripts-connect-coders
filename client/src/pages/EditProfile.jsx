import React, { useState} from 'react'
import { Link, FormControl, FormLabel, Input, Flex, Text, Avatar, Wrap, WrapItem, Stack, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import '../style.css'

const EditProfile = () => {

    const profileId = localStorage.getItem('profile_id')

    // form fields
    const [ formData, setFormData ] = useState({
        name: "",
        username: "",
        email: "",
        bio: "",
        github: "",
        stackoverflow: "",
        linkedin: "",
    });

    const avatarData = [
        {
            imgPath: "https://bit.ly/dan-abramov",
        },
        {
            imgPath: "https://bit.ly/kent-c-dodds",
        },
        {
            imgPath: "https://bit.ly/ryan-florence",
        },
        {
            imgPath: "https://bit.ly/prosper-baba",
        },
        {
            imgPath: "https://bit.ly/code-beast",
        },
        {
            imgPath: "https://bit.ly/sage-adebayo",
        },
        {
            imgPath: "/profiles/profile1.jpg",
        },
        {
            imgPath: "/profiles/profile2.jpg",
        },
        {
            imgPath: "/profiles/profile3.jpg"
        },
        {
            imgPath: "/profiles/profile5.jpg",
        },
    ]

    
    // changes in form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    }
    
    // selecting an avatar
    const [ previewAvatar, setPreviewAvatar ] = useState('');

    const handleAvatarChange = (selectedAvatar) => {
        setFormData({...formData, avatarData: selectedAvatar })
        setPreviewAvatar(selectedAvatar)
    }
    
    const saveChanges = () => {

        // TODO send formData to server
        try {

            console.log(formData)

        } catch (error) {
            console.log("Changes not saved", error)
        }

    }

    const history = useHistory();
    
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
                <Input placeholder='name' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='name' type='text'/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Username:</FormLabel>
                <Input placeholder='username'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='username' type='text'/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Email:</FormLabel>
                <Input placeholder='email'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='email' type='text'/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Password:</FormLabel>
                <Input placeholder='password'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='password' type='password'/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Biography:</FormLabel>
                <Input placeholder='bio'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='bio' type='text'/>
            </FormControl>  

            <FormControl mb={7}>
                <FormLabel>Github Account:</FormLabel>
                <Input placeholder='Github URL'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='github' type='text'/>
            </FormControl> 

            <FormControl mb={7}>
                <FormLabel>StackOverflow Account:</FormLabel>
                <Input placeholder='StackOverflow URL'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='stackoverflow' type='text'/>
            </FormControl>  

            <FormControl mb={7}>
                <FormLabel>LinkedIn Account:</FormLabel>
                <Input placeholder='LinkedIn URL'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='linkedin' type='text'/>
            </FormControl>   

            <FormControl  mb={7}>
                <FormLabel>Choose an Avatar:</FormLabel>
            <Wrap>
                {avatarData.map(avatar => (
                    <WrapItem >
                    <Avatar 
                        className='avatar'
                        name='avatar'
                        size='lg' 
                        alt='avatarPic'
                        src={avatar.imgPath} 
                        onClick={() => handleAvatarChange(avatar.imgPath)}
                        />
                </WrapItem>

                ))}
                </Wrap>
            </FormControl>

            <Stack direction='row' spacing={4} mt={7}>
              <Button bg={'neonBlue'} variant='solid' type='button' onClick={saveChanges}>
                Save Changes
              </Button>

              <Link href={`/profiles/${profileId}`}>
              <Button bg={'lightPurple'} variant='solid' type='button' onClick={() => history.push(`/profiles/${profileId}`)}>
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