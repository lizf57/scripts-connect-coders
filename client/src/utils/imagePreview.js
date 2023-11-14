import { useState, useCallback } from 'react'
import {useToast} from '@chakra-ui/toast'

const imagePreview = () => {

	const toast = useToast();

	const showToast = useCallback(
		(title, description, status) => {
			toast({
				title,
				description,
				status,
				duration: 3000,
				isClosable: true,
			});
		},
		[toast]
	);

	const [imgUrl, setImgUrl] = useState(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file && file.type.startsWith("image/")) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setImgUrl(reader.result);
			};

			reader.readAsDataURL(file);
		} else {
			showToast("Invalid file type", " File must be an image", "error");
			setImgUrl(null);
		}
	};
	return { handleImageChange, imgUrl, setImgUrl };
}

export default imagePreview