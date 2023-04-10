import { Box } from '@mui/system';
import React, { useEffect , useState } from 'react';



const ImageBox = ({alt, imagePath}) => {

  const [currentImage, setImage] = useState();

  useEffect(() => {
    async function fetchImage(imagePath) {
      const imageFetched = await import(`../components/images/${imagePath}`)
      const imageUrl = imageFetched.default
      setImage(imageUrl)
    }
  
    fetchImage(imagePath)
  }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
  


    return (
        <Box
          component="img"
          src = {currentImage}
          alt={alt}
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
        />

    );
}

export default ImageBox;
