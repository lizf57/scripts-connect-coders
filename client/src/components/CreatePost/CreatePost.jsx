import { Button, useColorModeValue } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CreatePost = () => {
  return (
    <>
    <Button
        position={"fixed"}
        bottom={100}
        right={10}
        leftIcon={<FontAwesomeIcon icon={faPlus} />}
        bg={useColorModeValue("gray.900","gray.200")}
    >
        Post
    </Button>

    </>
  )
}

export default CreatePost