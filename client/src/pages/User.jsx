import UserInfo from '../components/UserInfo'
import UserPost from '../components/UserPost'
import { Container } from '@chakra-ui/react'

const User = () => {
    return (
        <>
        <Container maxW='700px' mb={40}>
                
            <UserInfo /> 
            <UserPost />

        </Container>
        </>
    )
}

export default User