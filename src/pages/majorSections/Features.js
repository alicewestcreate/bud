import { Box, Typography } from '@mui/material';
import React from 'react';
import Light from '../../components/Features/Light';
import Pruning from '../../components/Features/Pruning';

const Features = ({plantIndex}) => {


    return (
        <Box sx={{ width: "90vw" }}>

        <Pruning plantIndex={plantIndex}/>
        <Light plantIndex={plantIndex}/>




        </Box>

    );
}

export default Features;
