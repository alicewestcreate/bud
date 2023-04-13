import { Button } from '@mui/material';
import React from 'react';

const ChoiceButton = ({color, text, showNextQuestion, storePreference, property, searchVal}) => {

  // const buttonRef = useRef();


  const HandleClick = (e) => {
    showNextQuestion()
    const thisButton = e.target;
    const propertyValue = thisButton.getAttribute('data-property');
    const searchValue = thisButton.getAttribute('data-value');
    storePreference(propertyValue, searchValue)

  
  }

    return (
        <Button
        data-property={property}
        data-value={searchVal}
        onClick={HandleClick}
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
