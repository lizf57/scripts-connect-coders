import { Flex, Image, useColorMode } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import Auth from '../../utils/auth';

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
        <Flex justifyContent={'center'} mt={1} mb={0}>
          <Image 
            cursor='pointer'
            boxSize='150px'
            objectFit={'cover'}
            alt='scripts logo'
            src='/scripts.png'
          />
        </Flex>
        <Flex justifyContent={'center'} mt={-10} mb={11}>

          {colorMode === 'dark' ? <FontAwesomeIcon icon={faSun} style={{color: '#cb6ce6'}} size={'lg'} cursor={'pointer'} onClick={toggleColorMode}/> : <FontAwesomeIcon icon={faMoon} style={{color: '#cb6ce6'}} size={'lg'} cursor={'pointer'} onClick={toggleColorMode}/>}

          
        </Flex>
    </header>
  );
};

export default Header;
