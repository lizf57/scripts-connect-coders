import { Button } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react'



const UploadWidget = () => {

    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dkcjh5c0w',
            uploadPreset: 'datvdftp'
        }, (error, result) => {
            console.log(result)
        })
    }, [] )

    return (
        <Button
            onClick={() => widgetRef.current.open()}
            ml={3}
        >
            Upload
        </Button>
    )
}

export default UploadWidget