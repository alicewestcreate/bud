import { Box } from '@mui/system';
import React from 'react';

const GradientBkgnd = ({children}) => {
    const gradient = "linear-gradient(-135deg, #F2E572 30%, #FBD07C 60%)";

    return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundImage: gradient, height: "calc(100vh)", width:"100vw"}}
      >
        {children}
      </Box>
    );
}

export default GradientBkgnd;
