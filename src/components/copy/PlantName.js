import { Typography } from '@mui/material';
import React from 'react';


const PlantName = ({plantName}) => {
    return (
        <Typography
        variant="h1"
        textAlign="left"
        lineHeight={1.3}
        sx={{ py: 2 }}
      >
        {plantName}
      </Typography>
    );
}

export default PlantName;
