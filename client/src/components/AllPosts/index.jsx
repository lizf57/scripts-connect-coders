import SinglePost from '../SinglePost'
import { Container, Flex } from '@chakra-ui/react'

const AllPosts = ({ posts }) => {
	if (!posts.length) {
		return <h3>No Posts Yet!</h3>

	}

	return (
		<>
			<Container maxW={'700px'} mb={40}>

				{posts && posts.map((post) => (

					<Flex justify={'center'} key={post._id}>
						<SinglePost {...post} />
					</Flex>

				))}

			</Container>
		</>
	)
}

export default AllPosts