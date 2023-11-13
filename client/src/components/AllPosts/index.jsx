import { Link } from 'react-router-dom'
import { Container, Text, Flex, Icon, IconButton, Box, Avatar, Card, CardHeader, CardBody, CardFooter,  Heading, Button } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiLike, BiChat, BiShare } from 'react-icons/bi'


const AllPosts = ({ posts }) => {
    if (!posts.length) {
        return <h3>No Posts Yet!</h3>
    }

    return (
        <>
            <Container maxW={'700px'} mb={40}>

                {posts && posts.map((post) => (
                    <div key={post._id}>
                        
                        <Card maxW='md' mb={12}>
                            <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                    <Box>
                                    <Heading size='sm'>Segun Adebayo</Heading>
                                    <Text>{post.username}</Text>
                                    </Box>
                                </Flex>
                                <IconButton
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                    icon={<BsThreeDotsVertical />}
                                />
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text>
                                {post.body}
                                </Text>
                            </CardBody>
                            <CardFooter
                                justify='space-between'
                                flexWrap='wrap'
                                sx={{
                                '& > button': {
                                    minW: '136px',
                                },
                                }}
                            >
                                <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                                Like
                                </Button>
                                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                                Comment
                                </Button>
                                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                                Share
                                </Button>
                            </CardFooter>
                        </Card>

                    </div>
                ))}

            </Container>
        </>
    )
}

export default AllPosts