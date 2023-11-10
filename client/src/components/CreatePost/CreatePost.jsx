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
import Auth from "../../utils/auth"

const charLimit = 255
let charMessage = ""
const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [postText,setPostText] = useState('')
    const [remainingChar, setRemainingChar] = useState(charLimit)
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
    const handleCreatePost = async () => {
      console.log("not working just yet")
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
        <ModalContent background={useColorModeValue("white","lightPurple")}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>

          <FormControl>
            <Textarea 
              placeholder="Enter what you want"
              onChange={handleTextChange}
              value={postText}              
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