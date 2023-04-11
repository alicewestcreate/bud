import { Box } from '@mui/system';
import React from 'react';

const PageContainer = ({children, parent = "questions"}) => {

  const height = 
  parent === "questions"
  ? `${"calc(100vh - 112px)"}`
  : parent === "results"
  ? `${"auto"}`
  : undefined;


    return (
        <Box
        sx={{
          // position: "fixed",
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          marginTop: "112px",
          height,
        }}
      >
        {children}
        </Box>
    );
}

export default PageContainer;
