import { Box } from '@mui/system';
import React from 'react';

const ContainerForImage = ({children, parent = "questions"}) => {

  const borderRadius = 
  parent === "questions"
  ? `${"0 10rem 0 0"}`
  : parent === "results"
  ? `${"0 0 30rem 30rem"}`
  : undefined;

  const height = 
  parent === "questions"
  ? `${"150vw"}`
  : parent === "results"
  ? `${"100vw"}`
  : undefined;



    return (
        <Box
        sx={{
          margin: "10px",
          // position: "fixed",
          borderRadius,
          height,
          overflow: "hidden",
          minWidth: "90vw",
    
        }}
      >
        {children}
    </Box>
    );
}

export default ContainerForImage;
