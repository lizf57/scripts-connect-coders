import { useQuery } from '@apollo/client'
import { Flex, Image, Link, useColorMode, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import Auth from '../../utils/auth';
const Header = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};

	const profileId = localStorage.getItem('profile_id')

	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<header>

			<Flex justify={'end'}>
				{Auth.loggedIn() ? (
					<div>
						<Link href={`/profiles/${profileId}`}>
							<Button m={4} bg={'lightPurple'} mb={-10}>
								My Profile
							</Button>
						</Link>

						<Link href={`/codefriends`}>
							<Button m={4} ml={0} bg={'lightPurple'} mb={-10}>
								Coding Friends
							</Button>
						</Link>

						<Button m={4} ml={0} bg={'neonBlue'} mb={-10} onClick={logout}>
							Logout
						</Button>
					</div>
				) : (
					''
				)}
			</Flex>

			<Flex justifyContent={'center'} mt={1} mb={0}>
				<Link href="/">
					<Image
						cursor='pointer'
						boxSize='150px'
						objectFit={'cover'}
						alt='scripts logo'
						src='/scripts.png'
					/>
				</Link>
			</Flex>

			<Flex justifyContent={'center'} mt={-10} mb={11}>

				{colorMode === 'dark' ? <FontAwesomeIcon icon={faSun} style={{ color: '#cb6ce6' }} size={'xl'} cursor={'pointer'} onClick={toggleColorMode} /> : <FontAwesomeIcon icon={faMoon} style={{ color: '#cb6ce6' }} size={'xl'} cursor={'pointer'} onClick={toggleColorMode} />}

			</Flex>

		</header>
	);
};

export default Header;