import { Button } from '@mui/material';
import React from 'react';

const ChoiceButton = ({color, text}) => {
    return (
        <Button
        variant="contained"
        color={color}
        sx={{ flex: 1,
            borderRadius: "100px",
            color: "white",
            textTransform: "none",}}
      >
        {text}
      </Button>
    );
}

export default ChoiceButton;
