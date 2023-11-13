import { useState } from "react"
import { Flex, Input, Link, Text, Button, Stack, FormControl, FormLabel, FormErrorMessage, FormHelperText, Box } from '@chakra-ui/react'
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from "../utils/queries";
import AllPosts from "../components/AllPosts";



const Home = (props) => {

  const { loading, data } = useQuery(QUERY_POSTS)
  console.log(data)
  const posts = data?.posts || []

  return (
    <>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <AllPosts posts={posts} />
        )}
      </div>
    </>
  )
}

export default Home