import { Stack, Text, Heading, Card, CardBody, Container } from '@chakra-ui/react'

import '../style.css'

const lists = [
	{
		title: "our purpose",
		description: "scripts serves as a vibrant hub for the coding community. Uniting individuals with shared passions for web development. A marketing tool for business. An avenue for philanthropic contributions. A way to get connected.",
	},
	{
		title: "connect with coders",
		link: "/Signup",
		description: "create an account with scripts and start networking with web developers.",
	},
	{
		title: "give back",
		link: "https://stripe.com/",
	},
	{
		title: "become part of the team",
		link: "/Careers",
	}
]

const About = () => {

	return (

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
								<Heading size='xl' style={{ color: '#cb6ce6' }} >
									{list.link ? <a href={list.link} target='_blank' className='title-links'> {list.title} </a> : list.title}
								</Heading>

								<Text size='md' style={{ color: '#5371FF' }}>{list.description}</Text>

							</CardBody>
						</Stack>
					</Card>
				)
			})}
		</Container>
	)
}

export default About