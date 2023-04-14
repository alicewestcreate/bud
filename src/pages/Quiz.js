import React, { useState, useContext, useEffect } from "react";
import PageContainer from "../components/containers/PageContainer";
import Questions from "./majorSections/Questions";
import questions from "../data/questions.json";
import ShowResultsPage from "./majorSections/ShowResultsPage";
import QuizContext from "./QuizContext";

const Quiz = () => {
  // eslint-disable-next-line no-unused-vars
  const { collectedVariables, setCollectedVariables } = useContext(QuizContext);

  const [showQuestion, setShowQuestions] = useState(true); // Show questions, until false.
  const [showResultsButton, setShowResults] = useState(false); // Show results when true.

  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[index].main);
  const [onSubQuestion, setSubQuestionState] = useState(false);

  const [allProperties, setProperties] = useState([]); // Store all properties selected during the quiz.
  const [allValues, setValues] = useState([]); // Store all values selected during the quiz
  const [allFeatures, setFeatures] = useState([]);




  useEffect(() => {
    console.log(currentQuestion);
  



  }, [currentQuestion]);



  function handleClickLeft() {

    if (onSubQuestion === false) {
      setSubQuestionState(true);
      setCurrentQuestion(questions[index].sub);

    } else if (onSubQuestion === true) {
      handleClickRight();
    }
  }


  function handleClickRight() {
    // Go to Main Question
    const check = endOfQuiz();
    if (check === false) {
      setSubQuestionState(false);
      setIndex(index + 1);
      setCurrentQuestion(questions[index].main);
    }
  }

  const functionsHandlers = [handleClickRight, handleClickLeft];

  const endOfQuiz = () => {
    const lengthOfQuiz = questions.length - 1;
    if (index >= lengthOfQuiz) {
      setShowQuestions(false);
      setShowResults(true);
      return true;
    }
    return false;
  };

  // Function that is passed down into the quiz card component.
  // For each question, store the selected property and value assoicated to that question.
  const storePreference = (property, value, features) => {
    setProperties((prevProperties) => [...prevProperties, property]);
    setValues((prevValues) => [...prevValues, value]);
    setFeatures((prevFeatures) => [...prevFeatures, features]);
    setCollectedVariables({ allProperties, allValues, allFeatures });
  };

  return (
    <PageContainer parent={"question"}>
      {showQuestion && (
        <Questions
          currentQuestion={currentQuestion}
          functionsHandlers={functionsHandlers}
          storePreference={storePreference}

          // questionNumber={0}
          // displayQuestionCard={displayQuestionCard}
        />
      )}
      {showResultsButton && <ShowResultsPage />}
    </PageContainer>
  );
};
export default Quiz;
