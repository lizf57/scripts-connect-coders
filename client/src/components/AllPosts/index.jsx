import { Link } from 'react-router-dom'
import { Container, Text, Flex, Icon, IconButton, Box, Avatar, Card, CardHeader, CardBody, CardFooter,  Heading, Button } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiLike, BiChat, BiShare, BiDislike } from 'react-icons/bi'


const AllPosts = ({ posts, profiles }) => {
    if (!posts.length) {
        return <h3>No Posts Yet!</h3>
    }

    return (
        <>
            <Container maxW={'700px'} mb={40}>

                {posts && posts.map(({
                    createdAt, 
                    body, 
                    _id,
                    profile: {
                        username,
                        avatar,
                        name,
                        _id: profileId
                    }
                }) => (
                    <div key={_id}>

                        <Flex justify={'center'}>
                            <Card maxW='lg' mb={12}>
                                <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='Segun Adebayo' src={avatar} />

                                        <Box>
                                        <Heading size='sm'>{name}</Heading>
                                        <Text>{username}</Text>
                                        <Text fontSize={'10px'}>{createdAt}</Text>
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
                                    {body}
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
                                    <Button flex='1' variant='ghost' leftIcon={<BiDislike />}>
                                    Dislike
                                    </Button>

                                    {/* Stretch Goal */}
                                    {/* <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                                    Share
                                    </Button> */}
                                </CardFooter>
                            </Card>

                        </Flex>
                        

                    </div>
                ))}

            </Container>
        </>
    )
}

export default AllPosts