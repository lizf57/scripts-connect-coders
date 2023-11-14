import { Button, useColorModeValue, useDisclosure, Text, FormControl, Textarea } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { ADD_POST } from '../../utils/mutations'
import { QUERY_POSTS, QUERY_SINGLE_PROFILE } from '../../utils/queries'
import Auth from "../../utils/auth"

const charLimit = 255
let charMessage = ""

const profileId = localStorage.getItem('profile_id');

const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [post,setPostText] = useState('')
    const [remainingChar, setRemainingChar] = useState(charLimit)

    const [addPost, { error }] = useMutation(ADD_POST, {

      refetchQueries: [QUERY_POSTS, 'allPosts'],
      refetchQueries: [QUERY_SINGLE_PROFILE, 'profile']
    })

    const handleTextChange = (e) => {
      const inputEntry = e.target.value

      if(inputEntry.length >= charLimit) {
        setPostText(inputEntry.slice(0,charLimit))
        setRemainingChar(0)
        charMessage = "Character limit reached"
      } else {
        setPostText(inputEntry)
        setRemainingChar(charLimit - inputEntry.length)
        charMessage = remainingChar + " characters remaining"
      }
    }

    // TODO This still isn't connecting to graphql
    const handleCreatePost = async (e) => {
      e.preventDefault();

      try {
        const data = await addPost({
          variables: { profileId, post },
        });
  
        setPostText('');
        onClose()
      } catch (err) {
        console.error(err);
      }
      
    }
    // TODO Add Images upload when we figure out cloudinary?
    // TODO: fix bug with character limit
  return (
    <>
    <div>
    {Auth.loggedIn() ? (
      <Button
      position={"fixed"}
      bottom={100}
      right={10}
      leftIcon={<FontAwesomeIcon icon={faPlus} />}
      bg={useColorModeValue("gray.900","gray.200")}
      onClick={onOpen}
      >
        Post
    </Button>
) : (
  "")}

</div>
<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay 
          bg={useColorModeValue("gray.900","gray.200")}
          backdropFilter='auto'
          backdropBlur='1px'
          />
        <ModalContent background={useColorModeValue("white","darkBlue")}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>

          <FormControl>
            <Textarea 
              placeholder="Enter what you want"
              onChange={handleTextChange}
              value={post}              
              />
            
            <Text fontSize={"xs"} textAlign={"right"} fontWeight={"bold"}>
              {charMessage}
            </Text>
          </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCreatePost}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default CreatePost