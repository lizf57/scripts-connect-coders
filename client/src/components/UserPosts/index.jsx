import { Link } from 'react-router-dom'
import { Container, Text, Flex, IconButton, Box, Avatar, Card, CardHeader, CardBody, CardFooter,  Heading, Button } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiLike, BiChat, BiShare, BiDislike } from 'react-icons/bi'


const UserPosts = ({ userPosts, userProfile }) => {
    if (!userPosts.length) {
        return <h3>No Posts Yet!</h3>
    }

    return (
        <>
            <Container maxW={'700px'}>
                {userPosts && userPosts.map(({
                    _id,
                    body,
                    createdAt
                }) => (
                    <div key={_id}>
                       <Flex justify={'center'}>
                            <Card maxW='lg' mb={12}>
                                <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name={`Avatar of ${userProfile.name}`} src={userProfile.avatar} />

                                        <Box>
                                           
                                                <Heading size='sm'>{userProfile.name}</Heading>
                                           
                                                <Text>{userProfile.username}</Text>
                                           
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
                )).sort().reverse()}
            </Container>
        </>
    )
}

export default UserPosts