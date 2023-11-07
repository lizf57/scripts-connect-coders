import { Avatar, VStack, Flex, Box, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const UserInfo = () => {
    return (
       <VStack>
            {/* Username, name, bio, and picture display */}
            {/* TODO: Add followers - stretch goal */}
            <Flex justifyContent={'space-between'} w={'full'}>
                <Box>
                    <Text color={'neonBlue'} fontWeight={'bold'} fontSize={'30px'}>Name</Text>
                    <Text fontSize={'sm'}>Username</Text>
                    <Text fontSize={'15px'} mt={3}>Bio: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio exercitationem molestiae ex numquam quibusdam asperiores.</Text>
                </Box>
                <Box>
                    <Avatar 
                        name='user1'
                        src='https://placehold.co/400'
                        size={'xl'}
                    />
                </Box>
            </Flex>

            {/* Links display */}
            <Flex justifyContent={'flex-end'} w={'full'}>
                    <Box mx={3}>
                    <FontAwesomeIcon icon={faGithub} style={{color: '#cb6ce6'}} cursor={'pointer'} size='2xl' />
                    </Box>

                    <Box mx={3}> 
                    <FontAwesomeIcon icon={faStackOverflow} style={{color: '#cb6ce6'}} cursor={'pointer'} size='2xl' />
                    </Box>

                    <Box mx={3}> 
                    <FontAwesomeIcon icon={faLinkedin} style={{color: '#cb6ce6'}} cursor={'pointer'} size='2xl' />
                    </Box>
                    
                
            </Flex>

       </VStack>
    )
}

export default UserInfo