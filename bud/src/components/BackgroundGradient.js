import { Box } from '@mui/system';
import React from 'react';

const BackgroundGradient = ({children}) => {
    const gradient = "linear-gradient(45deg, #F2E572 30%, #FBD07C 90%)";

    return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundImage: gradient, flexGrow:1}}
      >
        {children}
      </Box>
    );
}

export default BackgroundGradient;
