import { Box } from '@mui/system';
import React from 'react';

const PageContainer = ({children, parent = "questions"}) => {

  // const height = 
  // parent === "questions"
  // ? `${"calc(100vh - 112px)"}`
  // : parent === "results"
  // ? `${"auto"}`
  // : undefined;


    return (
        <Box id="PAGECONTAINER"
        sx={{
          display: "flex",
          // alignContent: "center",
          justifyContent: "center",
          // flexDirection: "column",
          marginTop: "56px",
          // height,
        }}
      >
        {children}
        </Box>
    );
}

export default PageContainer;
