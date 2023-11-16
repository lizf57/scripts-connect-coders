import { useState } from 'react';
import { Flex, Input, Text, Button, Stack, FormControl, FormLabel, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
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

			Auth.login(data.addProfile.token, data.addProfile.profile._id);
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

				{data ? (
					<p>Success!</p>
				) : (
					<form onSubmit={handleFormSubmit}>
						<FormControl isRequired mb={7}>
							<FormLabel>Name</FormLabel>
							<Input placeholder='name' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='name' type='text' value={formState.name} onChange={handleChange} />
						</FormControl>

						<FormControl isRequired mb={7}>
							<FormLabel>Username</FormLabel>
							<Input placeholder='email' borderColor={'neonBlue'} focusBorderColor={'lightPurple'} name='username' type='text' value={formState.username} onChange={handleChange} />
						</FormControl>

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
								Sign Up
							</Button>
						</Stack>

					</form>

				)}

				{error && (
					<Alert variant='solid' bg={'lightPurple'} mt={8}>
						<AlertIcon />
						<AlertTitle>Error signing up!</AlertTitle>

					</Alert>
				)}
			</Flex>
		</Flex>
	);
};

export default Signup;