import { Box } from '@mui/system';
import React from 'react';

const TextDiv = ({children}) => {
    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 0) 100%)",
          position: "absolute",
          bottom: "50px",
          left: 0,
          padding: "10vw",
          paddingTop: "50px",
          width: "80vw",
        }}
      >
        {children}
        </Box>
    );
}

export default TextDiv;
