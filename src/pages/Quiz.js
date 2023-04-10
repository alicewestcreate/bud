import React, { useState } from "react";

import PageContainer from "../components/PageContainer";
import ContainerForImage from "../components/ContainerForImage";
import ImageBox from "../components/ImageBox";
import TextDiv from "../components/TextDiv";
import QuestionHeading from "../components/QuestionHeading";
import ChoiceBtnDiv from "../components/ChoiceBtnDiv";
import ChoiceButton from "../components/ChoiceButton";

import questions from "../data/questions.json";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const Quiz = () => {

  let [questIndex, setQuestion] = useState(0); // Tracks which index to render from the questions.json file.
  const [showQuestion, setShowQuestions] = useState(true); // Show questions, until false.
  const [showResultsButton, setShowResults] = useState(false); // Show results when true.


  const showNextQuestion = () => {

    const NumOfQuest = questions.length - 1;
    if (questIndex >= NumOfQuest) {
      setShowQuestions(false);
      setShowResults(true);
    }
    let addOne = questIndex + 1;
    setQuestion(addOne);
  };



  const Questions = ({showNextQuestion }) => {
    return (
      <>
        <ContainerForImage>

          <ImageBox imagePath = {questions[questIndex].img} src={""} alt={"Cactus"} />
        </ContainerForImage>

        <TextDiv>
          <QuestionHeading question={questions[questIndex].question} />

          <ChoiceBtnDiv>
            <ChoiceButton 
              showNextQuestion = {showNextQuestion}
              color="third"
              text={questions[0].filter.left.btnTxt}
            />
            <ChoiceButton
              showNextQuestion = {showNextQuestion}
              color="secondary"
              text={questions[0].filter.right.btnTxt}
            />
          </ChoiceBtnDiv>
        </TextDiv>
        </>
    );
  };

  const ResultsButton = () => {
    return (
    <Box  width="100vw" height="calc(100vh - 250px)" sx={{display:"flex", alignItems: "center", justifyContent: "center"}}>
    <Button variant="contained" color="primary">Results</Button>
    </Box>
    )

  }

  return (

  <PageContainer>
  {showQuestion && (<Questions 
  showNextQuestion = {showNextQuestion}

                  // questionNumber={0}
                  // displayQuestionCard={displayQuestionCard}
                  // storePreference={storePreference}
  
  />)}
  {showResultsButton && ( <ResultsButton />)}
  </PageContainer>
  )
};
export default Quiz;
