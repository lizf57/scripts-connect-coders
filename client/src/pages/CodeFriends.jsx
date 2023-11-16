import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from "../utils/queries";
import ProfileList from "../components/ProfileList";

const CodeFriends = () => {

	const { loading, data } = useQuery(QUERY_PROFILES)
	console.log(data)
	const profiles = data?.profiles || []

	return (
		<>
			<div>
				{loading ? (
					<div>Loading...</div>
				) : (

					<ProfileList
						profiles={profiles}
					>
					</ProfileList>
				)}
			</div>
		</>
	)
}

export default CodeFriends