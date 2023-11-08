import { Stack, Text, Heading, Card, CardBody, Container } from '@chakra-ui/react'

const developers = [
    {
        name: "Tor Jansson",
        github: "https://github.com/tjansson-ui",
    },
    {
        name: "Nicole Stark",
        github: "https://github.com/nstark12",
    },
    {
        name: "Liz Friedman",
        github: "https://github.com/lizf57",
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

                <Heading size='xl' style={{color: '#cb6ce6'}} >
                    <a href={developer.github} target='_blank'>{developer.name}</a>
                </Heading>


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