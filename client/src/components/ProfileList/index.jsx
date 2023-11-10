import { Link } from 'react-router-dom';
import { Container, Text, Card, CardHeader, CardBody, CardFooter,  Heading, Button } from '@chakra-ui/react'

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
      <Container maxW={'700px'} mb={40}>

        {profiles &&
          profiles.map((profile) => (
            
            <div key={profile._id}>
              <Link to={`/profiles/${profile._id}`}></Link>
                <Card align='center' border={'2px solid white'} mt={10} borderRadius={20}>
                  <CardHeader mb={-8}>
                    <Heading size='md'>
                      <Link to={`/profiles/${profile._id}`}>
                        <h4>
                          {profile.name} - <span className='username'>{profile.username}</span>
                        </h4>
                      </Link>
                    </Heading>
                  </CardHeader>
                  <CardBody mb={-5}>
                    <Text>{profile.biography}</Text>
                  </CardBody>
                  <CardFooter>
                  <Link to={`/profiles/${profile._id}`}>
                    <Button bg='lightPurple'>View Profile</Button>  
                  </Link>
                  </CardFooter>
                </Card>      
            </div>

          ))}

      </Container>
     
    
  );
};

export default ProfileList;
