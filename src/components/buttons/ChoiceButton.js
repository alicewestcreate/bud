import { Button } from '@mui/material';
import React from 'react';

const ChoiceButton = ({color, text, handleIt, storePreference, property, searchVal, feature }) => {

  // const buttonRef = useRef();

  const HandleClick = (e) => {
    handleIt()
    const thisButton = e.target;
    const propertyValue = thisButton.getAttribute('data-property');
    const searchValue = thisButton.getAttribute('data-value');
    const featureValue = thisButton.getAttribute('data-feature');

    storePreference(propertyValue, searchValue, featureValue)
  }

    return (
        <Button
        data-feature={feature}
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
