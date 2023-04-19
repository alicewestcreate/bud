import React,  {useContext, useState, useEffect} from "react";
import PageContainer from "../components/containers/PageContainer";
import Questions from "./majorSections/Questions";
import questions from "../data/questions.json";
import ShowResultsPage from "./majorSections/ShowResultsPage";

import QuizPreferences from "../components/contexts/QuizPreferences";

const Quiz = () => {

  // eslint-disable-next-line no-unused-vars
  const { userPreferences, setUserPreferences } = useContext(QuizPreferences); // Stores quizdata & transfered to results page.

  const [quizData, setQuizData] = useState({ // store all properties searchvalues and features. 
    allProperties: [],
    allValues: [],
    allFeatures: [],
  });
  

  
  const handlePreferencesUpdate = (newProperty, newValue, newFeature ) => {
    setQuizData(prevState => ({
      allProperties: [...prevState.allProperties, newProperty],
      allValues: [...prevState.allValues, newValue],
      allFeatures: [...prevState.allFeatures, newFeature]
        }));
  }

  useEffect(() => {
    setUserPreferences(quizData)
    console.log(userPreferences);
  }, [quizData]);












  const [showQuestion, setShowQuestions] = useState(true); // Show questions, until false.

  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[index].main);
  const [onSubQuestion, setSubQuestionState] = useState(false);


  useEffect(() => {
    if (onSubQuestion === true) {
      setCurrentQuestion(questions[index].sub);      
    } else {
      setCurrentQuestion(questions[index].main);
    }
  }, [index,onSubQuestion]);


  function handleClickLeft() {
    setSubQuestionState(!onSubQuestion) // Starts with false. use clicks meh, turns to true, use clicks meh, turns back to false, usee
    if (onSubQuestion === true) {
      handleClickRight();
    } 
  }


  function handleClickRight() {
    const check = endOfQuiz();
    if (check === false) {
      setSubQuestionState(false)
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
          handlePreferencesUpdate = {handlePreferencesUpdate}
        />
      )}
      {!showQuestion && <ShowResultsPage />}
    </PageContainer>
  );
};
export default Quiz;
