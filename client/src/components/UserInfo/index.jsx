import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import auth from '../../utils/auth'
import SinglePost from '../SinglePost'

import { Avatar, VStack, Flex, Box, Text, Link } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { QUERY_SINGLE_PROFILE, QUERY_POSTS } from '../../utils/queries'

const UserInfo = () => {
   

    const { profileId } = useParams()

    const savedProfile = auth.getProfile()
    const loggedInUserId = savedProfile?.data?._id

    const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
        variables: { profileId: profileId }
    })

    const profile = data?.profile || {}

    if (loading) {
        return <div>Loading...</div>
    }

    console.log(profile)

    return (
       <VStack>
            {/* Username, name, bio, and picture display */}
            {/* TODO: Add followers - stretch goal */}
            <Flex justifyContent={'space-between'} w={'full'}>
                <Box>
                    <Text color={'neonBlue'} fontWeight={'bold'} fontSize={'30px'}>{profile.name}</Text>
                    { profileId === loggedInUserId && <Link color={'lightPurple'} fontSize={'sm'} href='/editProfile'>Edit Profile</Link> }
                    <Text fontSize={'md'}>{profile.username}</Text>
                    <Text fontSize={'md'} mt={3}>{profile.biography}</Text>
                </Box>
                <Box>
                    <Avatar 
                        name={`Avatar for ${profile.username}`}
                        src={`https://res.cloudinary.com/dkcjh5c0w/image/upload/v1699988362/${profile.avatar}.webp`}
                        size={'xl'}
                    />
                </Box>
                
            </Flex>

            {/* Links display */}
            
            <Flex justifyContent={'flex-end'} w={'full'}>
                    {profile.github ? (
                        <Link href={`https://${profile.github}`} isExternal>
                            <Box mx={3}>
                            <FontAwesomeIcon icon={faGithub} style={{color: '#cb6ce6'}} cursor={'pointer'} size='2xl' />
                            </Box>
                        </Link>
                    ) : (
                        ''
                    )}

                    {profile.stackOverflow ? (
                        <Link href={`https://${profile.stackOverflow}`} isExternal>
                            <Box mx={3}>
                            <FontAwesomeIcon icon={faStackOverflow} style={{color: '#cb6ce6'}} cursor={'pointer'} size='2xl' />
                            </Box>
                        </Link>
                    ) : (
                        ''
                    )}

                    {profile.linkedIn ? (
                        <Link href={`https://${profile.linkedIn}`} isExternal>
                            <Box mx={3}>
                            <FontAwesomeIcon icon={faLinkedin} style={{color: '#cb6ce6'}} cursor={'pointer'} size='2xl' />
                            </Box>
                        </Link>
                    ) : (
                        ''
                    )}

            </Flex>

            <Flex w={'full'} mt={7}>
                <Flex flex={1} borderBottom={'1.5px solid white'} justifyContent={'center'} pb={3} cursor={'pointer'}>
                    <Text fontWeight={'bold'}>&lt;scripts &#47;&gt;</Text>
                </Flex>
                <Flex flex={1} borderBottom={'1.px solid gray'} justifyContent={'center'} pb={3} cursor={'pointer'} color={'gray'}>
                    <Text fontWeight={'bold'}>comments</Text>
                </Flex>
            </Flex>

            <Flex>

                

                
            </Flex>

            {profile.posts && profile.posts.map((post) => (

            <Flex justify={'center'} key={post._id}>
                <SinglePost profile={profile} {...post} />
            </Flex>

            ))}

            {/* <UserPosts userPosts={profile.posts} userProfile={profile}>
                    
            </UserPosts> */}


       </VStack>
    )
}

export default UserInfo