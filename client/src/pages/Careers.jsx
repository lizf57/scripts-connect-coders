import { Container, Heading, Text } from '@chakra-ui/react'


const Careers = () => {

    return (
        <>
        
        <Container maxW='700px' mt={10} mb={40} padding={'10px'}>

        <Heading size='xl' style={{color: '#cb6ce6'}}>Careers</Heading>

        <Text size='md' style={{color: '#5371FF'}}> No current job openings available at this time. </Text>
       
        </Container>
        </>
    )
}

export default Careers