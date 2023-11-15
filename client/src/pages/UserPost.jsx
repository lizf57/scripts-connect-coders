import SinglePost from "../components/SinglePost"
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Container, Flex } from '@chakra-ui/react'
import auth from '../utils/auth'

import { QUERY_SINGLE_POST, QUERY_SINGLE_PROFILE } from '../utils/queries'

const UserPost = () => {



    const { profileId, postId } = useParams()

    const { loading, data } = useQuery(QUERY_SINGLE_POST, QUERY_SINGLE_PROFILE, {
        variables: { postId: postId, profileId: profileId }
    })

    const post = data?.post || {}

    const profile = data?.profile || {}

    console.log(profileId)
    console.log(postId)

    console.log(profile)
    console.log(post)

    return (
        <>
        <Container maxW={'700px'}>
            <Flex justify={'center'} >
                <SinglePost profile={profile} post={post} />
            </Flex>
        </Container>
        </>
    )
}

export default UserPost