import { Stack, Text, Heading, Card, CardBody, Container } from '@chakra-ui/react'

const developers = [
    {
        name: "Tor Jansson",
        github: "",
    },
    {
        name: "Nicole Stark",
        github: "",
    },
    {
        name: "Liz Friedman",
        github: "",
    },
    
]

const Developers = () => {
    return (
        <> 
      
        <Container maxW='700px' mb={40}>
            
        {developers.map(developer => {
            return (

            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='filled'
            >

            <Stack>

                <CardBody>

                <Heading size='xl' style={{color: '#cb6ce6'}} >{developer.name}</Heading>

                <Text size='md' style={{color: '#5371FF'}}>{developer.github}</Text>

                </CardBody>

            </Stack>

        </Card>
            )
        })}

        </Container>
      
       </>
    )
}

export default Developers