import SinglePost from '../SinglePost'
import { Container, Flex } from '@chakra-ui/react'

const AllPosts = ({ posts, profiles }) => {
	if (!posts.length) {
		return <h3>No Posts Yet!</h3>

	}

	return (
		<>
			<Container maxW={'700px'} mb={40}>

				{posts && posts.map((post) => (
					<div key={_id}>

						<Flex justify={'center'}>
							<SinglePost {...post} />
						</Flex>

					</div>
				))}

			</Container>
		</>
	)
}

export default AllPosts