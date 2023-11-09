import { useQuery } from '@apollo/client'
import { Flex, Image, Link, useColorMode, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { QUERY_SINGLE_PROFILE } from '../../utils/queries'

import Auth from '../../utils/auth';
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE)

  const profileId = data?.profile || []

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>

        <Flex justify={'end'}>
          {Auth.loggedIn() ? (
            <div>
            <Link href={`/profiles/${profileId._id}`}>
              <Button m={4} bg={'lightPurple'} mb={-10}>
                My Profile
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

          {colorMode === 'dark' ? <FontAwesomeIcon icon={faSun} style={{color: '#cb6ce6'}} size={'lg'} cursor={'pointer'} onClick={toggleColorMode}/> : <FontAwesomeIcon icon={faMoon} style={{color: '#cb6ce6'}} size={'lg'} cursor={'pointer'} onClick={toggleColorMode}/>}

          
        </Flex>
        
    </header>
  );
};

export default Header;
