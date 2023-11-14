import { useState, useEffect } from "react"
import { Flex, Input, Link, Text, Button, Stack, FormControl, FormLabel, FormErrorMessage, FormHelperText, Box } from '@chakra-ui/react'
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_PROFILES } from "../utils/queries";
import AllPosts from "../components/AllPosts";



const Home = (props) => {
    const [ skip, setSkip ] = useState(0)
    const [ loadedPosts, setLoadedPosts ] = useState([])
  const { loading, data, refetch } = useQuery(QUERY_POSTS, {
    variables: {skip}
  })
  console.log(data)
  
  const posts = data?.posts || []

  useEffect(()=> {
    setLoadedPosts([...loadedPosts, ...posts])
  },[data])

  const handleLoadMore = async () => {
    const newSkip = skip + 10
    console.log(newSkip)
    console.log(skip, "im old")
    await refetch({skip:newSkip})
    setSkip(newSkip)

  }
  

  return (
    <>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <AllPosts posts={loadedPosts} />
            { posts.length>0 && (
              <Flex justifyContent={"center"}>

                <Button 
                  onClick={handleLoadMore}
                  bg={'lightPurple'} 
                  mb={5}
                  >
                  Load More
                </Button>
              </Flex>
            ) 
            }
          </>
        )}
      </div>
    </>
  )
}

export default Home