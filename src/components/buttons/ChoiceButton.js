import { Button } from '@mui/material';
import React from 'react';

const ChoiceButton = ({color, text, showNextQuestion, neededIndex, storePreference, property, searchVal, feature }) => {

  const [questIndex, setQuestIndex, subQuestIndex, setSubQuestIndex] = neededIndex;


  // const buttonRef = useRef();

  const HandleClick = (e) => {
    const thisButton = e.target;
    const response = thisButton.innerText;
    const propertyValue = thisButton.getAttribute('data-property');
    const searchValue = thisButton.getAttribute('data-value');
    const featureValue = thisButton.getAttribute('data-feature');

    if (response === "meh") {
      if (subQuestIndex === 0) {
        showNextQuestion(questIndex, subQuestIndex)
      } 
      else {
        setSubQuestIndex(subQuestIndex + 1)
        showNextQuestion(questIndex, subQuestIndex)
      }
    }
    else if (response === "gimme") {
      setQuestIndex(questIndex + 1)
      showNextQuestion(questIndex)
      // CurrentQuestion === nextIndex, Main Question
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
