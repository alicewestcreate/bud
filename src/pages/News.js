import { useState } from "react";
import React from "react";
import { Box } from "@mui/system";
import questions from "../data/questions.json";

const News = () => {
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[index].main)
  const [onSubQuestion, setSubQuestionState] = useState(false)

  function handleClickLeft() {
    // Go to Main Question
    setIndex(index + 1);
    setCurrentQuestion(questions[index].main);
    setSubQuestionState(false)

  }
  function handleClickRight() {

    if (onSubQuestion === false) {
        setCurrentQuestion(questions[index].sub);
        setSubQuestionState(true)
    } else {
        handleClickLeft()
    }
    
  }

  console.log(currentQuestion.filter.left.property);


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <p>Current index: {index}</p>
        <h3> {currentQuestion.question}</h3>
        <button onClick={handleClickLeft}>Increment index</button>
        <button onClick={handleClickRight}>Increment index</button>
        <h3> {currentQuestion.filter.left.property}</h3>
        <h3> {currentQuestion.filter.left.searchVal}</h3>
        <h3> {currentQuestion.filter.right.property}</h3>
        <h3> {currentQuestion.filter.right.searchVal}</h3>

      </div>
    </Box>
  );
};

export default News;
