import { Button } from '@mui/material';
import React from 'react';
import questions from "../../data/questions.json"

const ChoiceButton = ({color, text, indexState, storePreference, property, searchVal, feature }) => {

  let [questIndex, setQuestion, setIndexUpdate, currentQuestion, setCurrentQuestion] = indexState

  // const buttonRef = useRef();

  const HandleClick = (e) => {
    const thisButton = e.target;
    const response = thisButton.innerText
    console.log(response);

    const propertyValue = thisButton.getAttribute('data-property');
    const searchValue = thisButton.getAttribute('data-value');
    const featureValue = thisButton.getAttribute('data-feature');

    if (response === "meh") {
      setCurrentQuestion(questions[questIndex].sub)
      
    }
    else if (response === "gimme") {
      setQuestion(questIndex + 1)
      setIndexUpdate(true)
  
    }

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
