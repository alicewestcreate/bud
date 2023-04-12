import { Box, Typography } from '@mui/material';
import React from 'react';
import Pruning from '../../components/Features/Pruning';

const Features = ({plantIndex}) => {


    return (
        <Box sx={{ width: "90vw" }}>

        <Pruning plantIndex={plantIndex}/>




        </Box>

    );
}

export default Features;
