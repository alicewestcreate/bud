import React, { useState, useEffect } from "react";
import PageContainer from "../components/containers/PageContainer";
import Questions from "./majorSections/Questions";
import questions from "../data/questions.json";
import ShowResultsPage from "./majorSections/ShowResultsPage";

const Quiz = () => {

  const [showQuestion, setShowQuestions] = useState(true); // Show questions, until false.


  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[index].main);
  const [onSubQuestion, setSubQuestionState] = useState(false);



  useEffect(() => {
    setCurrentQuestion(questions[index].main);

  }, [index]);


  function handleClickLeft() {
    console.log(currentQuestion);
    console.log(onSubQuestion);

    if (onSubQuestion === false) {
      setSubQuestionState(true);
      setCurrentQuestion(questions[index].sub);

    } else if (onSubQuestion === true) {
      handleClickRight();
      setSubQuestionState(false);
    }
  }


  function handleClickRight() {
    console.log(currentQuestion);
    // Go to Main Question
    const check = endOfQuiz();
    if (check === false) {
      setIndex(index + 1);
      
    }
  }

  const functionsHandlers = [handleClickRight, handleClickLeft];

  const endOfQuiz = () => {
    const lengthOfQuiz = questions.length - 1;
    if (index >= lengthOfQuiz) {
      setShowQuestions(false);
      return true;
    }
    return false;
  };


  return (
    <PageContainer parent={"question"}>

      {showQuestion && (
        <Questions
          currentQuestion={currentQuestion}
          functionsHandlers={functionsHandlers}
        />
      )}
      {!showQuestion && <ShowResultsPage />}
    </PageContainer>
  );
};
export default Quiz;
