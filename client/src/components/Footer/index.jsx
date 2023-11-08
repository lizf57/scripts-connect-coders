// import './footer.css' 
import { Flex, Text, Link, Stack } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

const Footer = () => {

   const { colorMode, toggleColorMode } = useColorMode()

    return (
      <>
         <Stack w={'full'} bg={'neonBlue'} pt={10}>

            <Flex justifyContent={'space-around'} w={'full'} >
               <Link mx={10} fontSize={'lg'} href='/about'>about</Link>
               <Link mx={10} fontSize={'lg'} href='/developers'>developers</Link>
               <Link mx={10} fontSize={'lg'} href='/careers'>careers</Link>
            </Flex>

            <Flex justifyContent={'center'} w={'full'}>
               <Text my={7}>&copy; 2023 scripts. All rights reserved.</Text>
            </Flex>
           

         </Stack>
      </>
    )
 }
 
 export default Footer


// import { useLocation, useNavigate } from 'react-router-dom';

// const Footer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   return (
//     <footer>
      
//     </footer>
//   );
// };

// export default Footer;
