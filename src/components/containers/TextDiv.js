import { Box } from '@mui/system';
import React from 'react';

const TextDiv = ({children, parent}) => {

  const parentValues = {
    questions: {
      padding: "10vw",
      bottom: 80,
      width: "80vw",
      position: "fixed",
    },
    results: {
      padding: "5vw",
      bottom: 40,
      width: "90vw",
      position: "relative",
    },
  };

  const parentObject = parentValues[parent] || {};
  const { padding, bottom, width, position } = parentObject;

    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position,
          left: 0,
          bottom,
          width,
          paddingTop: "50px",
          backgroundImage:
          "linear-gradient(0deg, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0.6) 75%, rgba(255, 255, 255, 0) 100%)",
        padding,
          
        }}
      >
        {children}
        </Box>
    );
}

export default TextDiv;
