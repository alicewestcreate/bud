import React, { useState, useEffect , useContext } from "react";
import PageContainer from "../components/containers/PageContainer";
import Questions from "./majorSections/Questions";
import getQuestions from "../data/getQuestions.json"
import ShowResultsPage from "./majorSections/ShowResultsPage";
import QuizContext from "./QuizContext";

const Quiz = () => {

// eslint-disable-next-line no-unused-vars
  const { collectedVariables, setCollectedVariables } = useContext(QuizContext);
  
  let [questIndex, setQuestIndex] = useState(0); // Tracks which index to render from the questions.json file.
  let [subQuestIndex, setSubQuestIndex] = useState(0); // Tracks which index to render from the questions.json file.

  let [currentQuestion, setCurrentQuestion] = useState(getQuestions[questIndex].main)
  const [showQuestion, setShowQuestions] = useState(true); // Show questions, until false.
  const [showResultsButton, setShowResults] = useState(false); // Show results when true.

  const [allProperties, setProperties] = useState([]); // Store all properties selected during the quiz.
  const [allValues, setValues] = useState([]); // Store all values selected during the quiz
  const [allFeatures, setFeatures] = useState([])

  // Function that is passed down into the quiz card component.
  // For each question, store the selected property and value assoicated to that question.
  const storePreference = (property, value, features) => {
    setProperties(prevProperties => [...prevProperties, property]);
    setValues(prevValues => [...prevValues, value]);
    setFeatures(prevFeatures => [...prevFeatures, features]);
    setCollectedVariables({ allProperties, allValues, allFeatures});
  };




  const [questionIndexUpdated, setQuestionIndexUpdated] = useState(false);

  let neededIndex = [questIndex, setQuestIndex, subQuestIndex, setSubQuestIndex ]

  const showNextQuestion = (questIndex, subQuestIndex ) => {
    console.log(questIndex, subQuestIndex );

  }





  // useEffect(() => {

  //   const showNextQuestion = (response) => {
  //     if (response === "meh") {
  //       showSubQuestion()
  //       // setQuestionIndexUpdated(false);
  //     }
  //     else if (response === "gimme") {
  //       setQuestIndex(questIndex + 1)
  //       showMainQuestion()
  //       // setQuestionIndexUpdated(false);
  //     }

  //   }

  //   // setQuestIndex(prevIndex => (prevIndex + 1))

  //   // if (questionIndexUpdated) {
  //   //   const response = ""; // Put your response logic here
  //   //   showNextQuestion(response);
     
  //   // }
  // }, [questIndex, subQuestIndex]);






  // const checkIfEndOfQuestions = () => {
    
  //   const NumOfQuest = getQuestions.length - 1;
  //   if (questIndex >= NumOfQuest) {
  //     console.log("1", showQuestion, showResultsButton);
  //     setShowQuestions(false);
  //     setShowResults(true);
  //     console.log("2", showQuestion, showResultsButton);
  //   }
  //   console.log("numner of question ", NumOfQuest);
  //   console.log("question index", questIndex);
  // }


  // const showMainQuestion = () => {    
   
  //   checkIfEndOfQuestions()

  //   if (response === "gimme") {
     
  //     setCurrentQuestion(getQuestions[questIndex].main);
  //     setSubQuestIndex(0)
  //     setQuestionIndexUpdated(true);

  //   }

  // };

  // const showSubQuestion = () => {
  //   setCurrentQuestion(getQuestions[questIndex].sub[subQuestIndex]); 
  //   setQuestionIndexUpdated(true);
  // }


  // useEffect(() => {
  //   console.log('currentQuestion', currentQuestion);
  //   console.log('questIndex:', questIndex);
  // }, [currentQuestion, questIndex]);



  return (
    <PageContainer parent={"question"}>
      {showQuestion && (
        <Questions
        currentQuestion = {currentQuestion}
        neededIndex = {neededIndex}
          // questIndex={questIndex}
          showNextQuestion={showNextQuestion}
          storePreference={storePreference}

          // questionNumber={0}
          // displayQuestionCard={displayQuestionCard}
     
        />
      )}
      {showResultsButton && <ShowResultsPage/>}
    </PageContainer>
  );
};
export default Quiz;
