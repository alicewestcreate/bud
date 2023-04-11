import React, { useEffect , useState } from 'react';
import { Box } from '@mui/system';



const ImageBox = ({alt, imagePath}) => {

  const [currentImage, setImage] = useState();

  useEffect(() => {
    async function fetchImage(imagePath) {
      const imageFetched = await import(`../../images/${imagePath}`)
      const imageUrl = imageFetched.default
      setImage(imageUrl)
    }
  
    fetchImage(imagePath)
  }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [imagePath])
  


    return (
        <Box
          component="img"
          src = {currentImage}
          alt={alt}
          sx={{
            objectFit: "cover",
            width: "95vw",
            verticalAlign: "bottom"

          }}
        />

    );
}

export default ImageBox;
