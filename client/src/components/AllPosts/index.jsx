import { Link } from 'react-router-dom'
import { Container, Text, Flex, Box, Avatar, Card, CardHeader, CardBody, CardFooter,  Heading, Button } from '@chakra-ui/react'


const AllPosts = ({ posts }) => {
    if (!posts.length) {
        return <h3>No Posts Yet!</h3>
    }

    return (
        <>
            <Container maxW={'700px'} mb={40}>

                {posts && posts.map((post) => (
                    <div key={post._id}>
                        
                        <Card maxW='md'>
                            <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                    <Box>
                                    <Heading size='sm'>Segun Adebayo</Heading>
                                    <Text>{post.username}</Text>
                                    </Box>
                                </Flex>
                                {/* <IconButton
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                    // icon={<BsThreeDotsVertical />}
                                /> */}
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text>
                                {post.body}
                                </Text>
                            </CardBody>

                        </Card>

                    </div>
                ))}

            </Container>
        </>
    )
}

export default AllPosts