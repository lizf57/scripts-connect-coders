import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { Avatar, VStack, Flex, Box, Text, Link } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { QUERY_SINGLE_PROFILE } from '../../utils/queries'

const UserInfo = () => {

    const { profileId } = useParams()

    const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
        variables: { profileId: profileId }
    })

    const profile = data?.profile || {}

    if (loading) {
        return <div>Loading...</div>
    }

    return (
       <VStack>
            {/* Username, name, bio, and picture display */}
            {/* TODO: Add followers - stretch goal */}
            <Flex justifyContent={'space-between'} w={'full'}>
                <Box>
                    <Text color={'neonBlue'} fontWeight={'bold'} fontSize={'30px'}>{profile.name}</Text>
                    <Text fontSize={'sm'}>{profile.username}</Text>
                    <Text fontSize={'15px'} mt={3}>{profile.biography}</Text>
                </Box>
                <Box>
                    <Avatar 
                        name={`Avatar for ${profile.username}`}
                        src='https://placehold.co/400'
                        size={'xl'}
                    />
                </Box>
            </Flex>

            {/* Links display */}
            <Flex justifyContent={'flex-end'} w={'full'}>
                    <Link href={`https://${profile.github}`} isExternal>
                        <Box mx={3}>
                        <FontAwesomeIcon icon={faGithub} style={{color: '#cb6ce6'}} cursor={'pointer'} size='2xl' />
                        </Box>
                    </Link>

                    <Link href={`https://${profile.stackOverflow}`} isExternal>
                        <Box mx={3}> 
                        <FontAwesomeIcon icon={faStackOverflow} style={{color: '#cb6ce6'}} cursor={'pointer'} size='2xl' />
                        </Box>
                    </Link>

                    <Link href={`https://${profile.linkedIn}`} isExternal>
                        <Box mx={3}> 
                        <FontAwesomeIcon icon={faLinkedin} style={{color: '#cb6ce6'}} cursor={'pointer'} size='2xl' />
                        </Box>
                    </Link>
                    
                
            </Flex>

       </VStack>
    )
}

export default UserInfo