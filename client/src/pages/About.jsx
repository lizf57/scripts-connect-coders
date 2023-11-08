import { Stack, Text, Heading, Card, CardBody, Container, } from '@chakra-ui/react'

const lists = [
    {
        title: "our purpose",
        description: "scripts serves as a vibrant hub for the coding community. Uniting individuals with shared passions for web development. A marketing tool for business. An avenue for philanthropic contributions. A way to get connected.",
    },
    {
        title: "connect with coders",
        description: "create an account with scripts and start networking with web developers.",
    },
    {
        // TODO: STRIPE PAYMENT - SET UP LINK
        title: "give back",
        description: "link for stripe",
    },
    {
        // TODO: Set up link to career page
        title: "become part of the team",
        description: "link to career page",
    }
]

const About = () => {

    return (
        <> 
      
        <Container maxW='700px' mb={40}>
            
        {lists.map(list => {
            return (

            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='filled'
            >

            <Stack>

                <CardBody>

                <Heading size='xl' style={{color: '#cb6ce6'}} >{list.title}</Heading>

                <Text size='md' style={{color: '#5371FF'}}>{list.description}</Text>

                </CardBody>

            </Stack>

        </Card>
            )
        })}

        </Container>
      
       </>
    )
}

export default About