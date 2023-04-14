import React, { useState, useContext, useEffect } from "react";
import PageContainer from "../components/containers/PageContainer";
import Questions from "./majorSections/Questions";
import questions from "../data/questions.json";
import ShowResultsPage from "./majorSections/ShowResultsPage";
import QuizContext from "./QuizContext";

const Quiz = () => {

  // eslint-disable-next-line no-unused-vars
  const { collectedVariables, setCollectedVariables } = useContext(QuizContext); // Keep track of all properties/values collected in the quiz 

  // Show Question Component or ResultsButton Component. 
  const [showQuestion, setShowQuestions] = useState(true); // Show questions, until false.
  const [showResultsButton, setShowResults] = useState(false); // Show results when true.

  
  let [questIndex, setQuestion] = useState(0); // Tracks which index to render from the questions.json file.
  let [subIndex, setSubIndex] = useState(0) // Tracks the subIndex

  let [currentQuestion, setCurrentQuestion] = useState(questions[questIndex].main)
  let [inSubQuestion, setSubQuestionState] = useState(false)

  let [indexUpdated, setIndexUpdate] = useState(false)


  const indexState = [questIndex, setQuestion, setIndexUpdate, currentQuestion, setCurrentQuestion]

  const [allProperties, setProperties] = useState([]); // Store all properties selected during the quiz.
  const [allValues, setValues] = useState([]); // Store all values selected during the quiz
  const [allFeatures, setFeatures] = useState([])



  useEffect(()=> {
    console.log("inside use effect");
    
    if (indexUpdated === true) {
      
      setIndexUpdate(false)
    }
    

    currentQuestion = currentQuestion
    // showSubQuestion()


  }, [currentQuestion, questIndex ])


  const showNextQuestion = () => {
    console.log("A",questIndex);
    const NumOfQuest = questions.length - 1;
    if (questIndex >= NumOfQuest) {
      setShowQuestions(false);
      setShowResults(true);
    }
    setCurrentQuestion(questions[questIndex].main)

    console.log("B",questIndex);
  };

  const showSubQuestion = () => {
    if (inSubQuestion === false) {
      console.log("SubQuestion");
      setCurrentQuestion(questions[questIndex].sub)
      setSubQuestionState(true)
    }
    showNextQuestion()
    setSubQuestionState(false)

  }







    // Function that is passed down into the quiz card component.
  // For each question, store the selected property and value assoicated to that question.
  const storePreference = (property, value, features) => {
    setProperties(prevProperties => [...prevProperties, property]);
    setValues(prevValues => [...prevValues, value]);
    setFeatures(prevFeatures => [...prevFeatures, features]);
    setCollectedVariables({ allProperties, allValues, allFeatures});
  };


  return (
    <PageContainer parent={"question"}>
      {showQuestion && (
        <Questions
        currentQuestion={currentQuestion}
        indexState={indexState}

        
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
