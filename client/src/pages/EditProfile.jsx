import React, { useState} from 'react'
import { Link, FormControl, FormLabel, Input, Flex, Text, Avatar, Wrap, WrapItem, Stack, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import '../style.css'
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../utils/mutations';
import auth from '../utils/auth'
import CloudinaryUploadWidget from "../components/UploadWidget/UploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

const EditProfile = () => {

    const profileId = localStorage.getItem('profile_id');

    const savedProfile = auth.getProfile()
    const loggedInUserId = savedProfile?.data?._id

    // form fields
    const [ formData, setFormData ] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        biography: "",
        github: "",
        stackOverflow: "",
        linkedIn: "",
        avatar: ""
    });

    //avatar cloudinary setter
    const [publicId, setPublicId] = useState("");
    const [cloudName] = useState("dkcjh5c0w");
    const [uploadPreset] = useState("datvdftp");
    const [uwConfig] = useState({
        cloudName,
        uploadPreset,
        maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        maxImageWidth: 800, //Scales the image down to a width of 2000 pixels before uploading
            //other options available
            // cropping: true, //add a cropping step
            // showAdvancedOptions: true,  //add advanced options (public_id and tag)
            // sources: [ "local", "url"], // restrict the upload sources to URL and local files
            // multiple: false,  //restrict upload to a single file
            // folder: "user_images", //upload files to the specified folder
            // tags: ["users", "profile"], //add the given tags to the uploaded files
            // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
            // clientAllowedFormats: ["images"], //restrict uploading to image files only
            // theme: "purple", //change to a purple theme
        
      });

      const cld = new Cloudinary({
        cloud: {
          cloudName
        }
      });

      const myImage = cld.image(publicId);
    
    const [updateProfile, {loading, data, error}] = useMutation(UPDATE_PROFILE)

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
        setFormData({
            ...formData, 
            [name]: value 
        })
    }
    
    // selecting an avatar
    const [ previewAvatar, setPreviewAvatar ] = useState('');

    const handleAvatarChange = (e) => {
        const selectedAvatar = e.target
        setFormData({...formData, avatarData: selectedAvatar })
        setPreviewAvatar(selectedAvatar)
    }
    
    const saveChanges = async (e) => {
      e.preventDefault();
      console.log(formData,1);
      console.log(profileId,2)
        try {
            
            await updateProfile({
                variables: {
                    profileId: profileId,
                    profile: formData
                }
            })

        } catch (error) {
            console.log("Changes not saved", error)
        }

    }

    const navigate = useNavigate();

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
        <form onSubmit={saveChanges}>
            <FormControl  mb={7}>
                <FormLabel>Name:</FormLabel>
                <Input placeholder='name' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='name' type='text' value={formData.name} onChange={handleInputChange}/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Username:</FormLabel>
                <Input placeholder='username'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='username' type='text' value={formData.username} onChange={handleInputChange} />
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Email:</FormLabel>
                <Input placeholder='email'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='email' type='text'
                value={formData.email} onChange={handleInputChange}/>
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Password:</FormLabel>
                <Input placeholder='password'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='password' type='password' value={formData.password} onChange={handleInputChange} />
            </FormControl>  

            <FormControl  mb={7}>
                <FormLabel>Biography:</FormLabel>
                <Input placeholder='biography'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='biography' type='text' value={formData.biography} onChange={handleInputChange}/>
            </FormControl>  

            <FormControl mb={7}>
                <FormLabel>Github Account:</FormLabel>
                <Input placeholder='Github URL'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='github' type='text' value={formData.github} onChange={handleInputChange}/>
            </FormControl> 

            <FormControl mb={7}>
                <FormLabel>StackOverflow Account:</FormLabel>
                <Input placeholder='StackOverflow URL'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='stackOverflow' type='text' value={formData.stackoverflow} onChange={handleInputChange}/>
            </FormControl>  

            <FormControl mb={7}>
                <FormLabel>LinkedIn Account:</FormLabel>
                <Input placeholder='LinkedIn URL'  borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='linkedIn' type='text' value={formData.linkedin} onChange={handleInputChange}/>
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
            <Flex> 
                <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
                <div style={{ width: "800px" }}>
                    <AdvancedImage
                    style={{ maxWidth: "100%" }}
                    cldImg={myImage}
                    plugins={[responsive(), placeholder()]}
                    />
                </div>
            </Flex>

            <Stack direction='row' spacing={4} mt={7}>
              <Button bg={'neonBlue'} variant='solid' type='submit'>
                Save Changes
              </Button>

              <Link href={`/profiles/${profileId}`}>
              <Button bg={'lightPurple'} variant='solid' type='button' onClick={() => navigate.push(`/profiles/${profileId}`)}>
                Cancel
              </Button>
              </Link>
             
            </Stack>

            <Stack direction='row' justifyContent={'flex-end'} spacing={4} mt={7}>
              <Button bg={'gray'} variant='solid' type='submit'>
                Delete Profile
              </Button>
            </Stack>
        </form>
    </Flex>
    </Flex>
    </>
  )
}

export default EditProfile