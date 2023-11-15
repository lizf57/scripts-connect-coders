import React from 'react'
import { Link } from 'react-router-dom'
import { Text, Flex, IconButton, Box, Avatar, Card, CardHeader, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiLike, BiChat, BiDislike } from 'react-icons/bi'
import { TOGGLE_LIKE, TOGGLE_DISLIKE } from '../../utils/mutations'
import { useMutation } from '@apollo/client'
import auth from '../../utils/auth'
import { useState } from 'react'


const SinglePost = ({
	createdAt,
	body,
	_id,
	likedBy,
	dislikedBy,
	profile: {
		username,
		avatar,
		name,
		_id: profileId
	}
}) => {


	const loggedInProfileId = auth.getProfile()?.data?._id

	const [likedData, setLikedData] = useState(likedBy)
	const liked = likedData?.includes(loggedInProfileId)
	console.log('LIKED BY', likedBy)

	const [dislikedData, setDislikedData] = useState(dislikedBy)
	const disliked = dislikedData?.includes(loggedInProfileId)



	const [toggleLike] = useMutation(TOGGLE_LIKE, {
		variables: {
			postId: _id,
			profileId: loggedInProfileId
		}
	})
	const [toggleDislike] = useMutation(TOGGLE_DISLIKE, {
		variables: {
			postId: _id,
			profileId: loggedInProfileId
		}
	})

	console.log(likedData)


	return (

		<Card maxW='lg' mb={12}>
			<CardHeader>
				<Flex spacing='4'>
					<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
						<Avatar name={`Avatar of ${name}`} src={`https://res.cloudinary.com/dkcjh5c0w/image/upload/v1699988362/${avatar}.webp`} />

						<Box>
							<Link to={`/profiles/${profileId}`}>
								<Heading className='nameLink' size='sm'>{name}</Heading>
							</Link>
							<Link to={`/profiles/${profileId}`}>
								<Text className='nameLink'>{username}</Text>
							</Link>
							<Text fontSize={'10px'}>{createdAt} </Text>
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
			<CardBody as={Link} to={`${profileId}/post/${_id}`}>
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
				<Button flex='1' variant={liked ? 'solid' : 'ghost'} bg={liked ? 'lightPurple' : 'ghost'} leftIcon={<BiLike />} onClick={async () => {
					const results = await toggleLike()
					setLikedData(results.data.toggleLike.likedBy)

				}}>
					Like
				</Button>
				<Button flex='1' variant='ghost' leftIcon={<BiChat />}>
					Comment
				</Button>
				<Button flex='1' variant={disliked ? 'solid' : 'ghost'} bg={disliked ? 'lightPurple' : 'ghost'} leftIcon={<BiDislike />} onClick={async () => {
					const results = await toggleDislike()
					setDislikedData(results.data.toggleDislike.dislikedBy)

				}}>
					Dislike
				</Button>

				{/* Stretch Goal */}
				{/* <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
            Share
            </Button> */}
			</CardFooter>
			<Flex justify={'center'}>
				<Text fontSize={'xs'} mx={7} color={'neonBlue'}>{likedData ? likedData.length : '0'} Likes</Text>
				<Text fontSize={'xs'} mx={7} color={'neonBlue'}>{dislikedData ? dislikedData.length : '0'} Dislikes</Text>
			</Flex>
		</Card>

	)
}

export default SinglePost