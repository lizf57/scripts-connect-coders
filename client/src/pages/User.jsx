import UserInfo from '../components/UserInfo'

import { Container } from '@chakra-ui/react'

const User = () => {
                
    return (
        <>
        <Container maxW='700px' mb={40}>
                
            <UserInfo /> 
            
        </Container>
        </>
    )
}

export default User