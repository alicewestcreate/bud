import { Box } from '@mui/system';
import React from 'react';

const PageContainer = ({children}) => {
    return (
        <Box
        sx={{
          position: "fixed",
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          marginTop: "112px",
          height: "calc(100vh - 112px)",
        }}
      >
        {children}
        </Box>
    );
}

export default PageContainer;
