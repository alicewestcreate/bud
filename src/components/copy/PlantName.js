import { Typography } from '@mui/material';
import React from 'react';


const PlantName = ({dummyInfo}) => {
    return (
        <Typography
        variant="h1"
        textAlign="left"
        lineHeight={1.3}
        sx={{ py: 2 }}
      >
        {dummyInfo}
      </Typography>
    );
}

export default PlantName;
