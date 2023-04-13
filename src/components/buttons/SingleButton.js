import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from "@mui/material";


const SingleButton = () => {
    return (
        <Button component={RouterLink} to="/results" variant="contained" color="primary">
          view your buds
        </Button>
    );
}

export default SingleButton;
