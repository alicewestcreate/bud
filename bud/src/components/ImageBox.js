import { Box } from '@mui/system';
import React from 'react';

const ImageBox = ({src, alt}) => {
    return (
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
        />

    );
}

export default ImageBox;
