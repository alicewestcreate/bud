import { Box } from '@mui/system';
import React from 'react';

const ContainerForImage = ({children}) => {
    return (
        <Box
        sx={{
          margin: "10px",
          position: "fixed",
          borderRadius: "0 10rem 0 0",
          overflow: "hidden",
          minWidth: "100wv",
          height: "60vh",
        }}
      >
        {children}
    </Box>
    );
}

export default ContainerForImage;
