import React, { useState, useEffect } from 'react'
import { Link, FormControl, FormLabel, Input, Flex, Text, Stack, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import '../style.css'
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_PROFILE, REMOVE_PROFILE } from '../utils/mutations';
import auth from '../utils/auth'
import CloudinaryUploadWidget from "../components/UploadWidget/UploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const EditProfile = () => {

	const profileId = localStorage.getItem('profile_id');

	const savedProfile = auth.getProfile()
	const loggedInUserId = savedProfile?.data?._id
	const { loading, data, error } = useQuery(QUERY_SINGLE_PROFILE, {
		variables: { profileId: loggedInUserId }
	})
	// form fields
	console.log(data)
	const [formData, setFormData] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
		biography: "",
		github: "",
		stackOverflow: "",
		linkedIn: "",
		avatar: "",
	});

	useEffect(() => {
		if (data?.profile) {
			setFormData(data.profile)
			console.log(data)
		}
	}, [data])

	//avatar cloudinary setter
	const [publicId, setPublicId] = useState("");
	const [cloudName] = useState("dkcjh5c0w");
	const [uploadPreset] = useState("datvdftp");
	const [uwConfig] = useState({
		cloudName,
		uploadPreset,
		maxImageFileSize: 2000000,  //restrict file size to less than 2MB
		maxImageWidth: 800,

	});

	const cld = new Cloudinary({
		cloud: {
			cloudName
		}
	});

	const myImage = cld.image(publicId);

	const [updateProfile,] = useMutation(UPDATE_PROFILE)

	// changes in form fields
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		})
	}

	// SAVE CHANGES TO EDITS
	const saveChanges = async (e) => {

		try {

			await updateProfile({
				variables: {
					profileId: profileId,
					profile: formData
				}
			})

			window.location.replace(`/profiles/${profileId}`)

		} catch (error) {
			console.log("Changes not saved", error)
		}

	}

	// DELETE PROFILE  
	const [removeProfile,] = useMutation(REMOVE_PROFILE)
	const deleteRequestHandler = async (e) => {
		e.preventDefault();

		const confirmDelete = window.confirm('Are you sure you want to delete your profile?')

		if (confirmDelete) {
			try {
				await removeProfile({
					variables: {
						profileId: profileId
					}
				});

				auth.logout()
				window.location.replace(`/login`)
			} catch (error) {
				console.log("Error deleting profile", error)
			}
		} else {
			console.log('Profile not deleted.')
		}
	}

	// CANCEL ANY UPDATES AND REDIRECT TO PROFILE
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
						<FormControl mb={7}>
							<FormLabel>Name:</FormLabel>
							<Input placeholder='name' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='name' type='text' value={formData.name} onChange={handleInputChange} />
						</FormControl>

						<FormControl mb={7}>
							<FormLabel>Username:</FormLabel>
							<Input placeholder='username' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='username' type='text' value={formData.username} onChange={handleInputChange} />
						</FormControl>

						<FormControl mb={7}>
							<FormLabel>Email:</FormLabel>
							<Input placeholder='email' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='email' type='text'
								value={formData.email} onChange={handleInputChange} />
						</FormControl>

						<FormControl mb={7}>
							<FormLabel>Password:</FormLabel>
							<Input placeholder='password' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='password' type='password' value={formData.password} onChange={handleInputChange} />
						</FormControl>

						<FormControl mb={7}>
							<FormLabel>Biography:</FormLabel>
							<Input placeholder='biography' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='biography' type='text' value={formData.biography} onChange={handleInputChange} />
						</FormControl>

						<FormControl mb={7}>
							<FormLabel>Github Account:</FormLabel>
							<Input placeholder='Github URL' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='github' type='text' value={formData.github} onChange={handleInputChange} />
						</FormControl>

						<FormControl mb={7}>
							<FormLabel>StackOverflow Account:</FormLabel>
							<Input placeholder='StackOverflow URL' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='stackOverflow' type='text' value={formData.stackOverflow} onChange={handleInputChange} />
						</FormControl>

						<FormControl mb={7}>
							<FormLabel>LinkedIn Account:</FormLabel>
							<Input placeholder='LinkedIn URL' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='linkedIn' type='text' value={formData.linkedIn} onChange={handleInputChange} />
						</FormControl>

						<FormControl mb={7}>
							<FormLabel>Add an Avatar:</FormLabel>
							<CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
							<div style={{ width: "800px" }}>
								<AdvancedImage
									style={{ maxWidth: "100%" }}
									cldImg={myImage}
									plugins={[responsive(), placeholder()]}
								/>
							</div>

						</FormControl>

						<Stack direction='row' spacing={4} mt={7}>
							<Button bg={'neonBlue'} variant='solid' type='submit' onClick={async () => {
								if (publicId) {
									await setFormData({ ...formData, avatar: publicId })
								}
								saveChanges()
							}}>
								Save Changes
							</Button>

							<Link href={`/profiles/${profileId}`}>
								<Button bg={'lightPurple'} variant='solid' type='button' onClick={() => navigate.push(`/profiles/${profileId}`)}>
									Cancel
								</Button>
							</Link>

						</Stack>

					</form>
					<Stack direction='row' justifyContent={'flex-end'} spacing={4} mt={7}>
						<Button bg={'gray'} variant='solid' type='button' onClick={deleteRequestHandler}>
							Delete Profile
						</Button>
					</Stack>
				</Flex>
			</Flex>
		</>
	)
}

export default EditProfile