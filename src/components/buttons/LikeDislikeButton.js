import { Button } from '@mui/material';
import React from 'react';


const LikeDislikeButton = ({color, text, showNextCard}) => {

    const HandleClick = (text) => {
        showNextCard(text)
      }
    
        return (
            <Button
            onClick={()=> HandleClick(text)}
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

export default LikeDislikeButton;
