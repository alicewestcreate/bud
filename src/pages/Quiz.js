import React, { useState, useEffect, useContext } from "react";
import PageContainer from "../components/containers/PageContainer";
import Questions from "./majorSections/Questions";
import questions from "../data/questions.json";
import ShowResultsPage from "./majorSections/ShowResultsPage";
import QuizContext from "./QuizContext";




const Quiz = () => {

// eslint-disable-next-line no-unused-vars
  const { collectedVariables, setCollectedVariables } = useContext(QuizContext);
  
  let [questIndex, setQuestion] = useState(0); // Tracks which index to render from the questions.json file.
  const [showQuestion, setShowQuestions] = useState(true); // Show questions, until false.
  const [showResultsButton, setShowResults] = useState(false); // Show results when true.


  const [allProperties, setProperties] = useState([]); // Store all properties selected during the quiz.
  const [allValues, setValues] = useState([]); // Store all values selected during the quiz

  useEffect(() => {
    console.log('allProperties updated:', allProperties);
    console.log('allValues updated:', allValues);
  }, [allProperties, allValues]);


  const showNextQuestion = () => {
    const NumOfQuest = questions.length - 1;
    if (questIndex >= NumOfQuest) {
      setShowQuestions(false);
      setShowResults(true);
    }
    let addOne = questIndex + 1;
    setQuestion(addOne);
  };

    // Function that is passed down into the quiz card component.
  // For each question, store the selected property and value assoicated to that question.
  const storePreference = (property, value) => {
    setValues(prevValues => [...prevValues, value]);
    setProperties(prevProperties => [...prevProperties, property]);
    setCollectedVariables({ allProperties, allValues});
  };





  return (
    <PageContainer parent={"question"}>
      {showQuestion && (
        <Questions
          questIndex={questIndex}
          showNextQuestion={showNextQuestion}
          storePreference={storePreference}

          // questionNumber={0}
          // displayQuestionCard={displayQuestionCard}
     
        />
      )}
      {showResultsButton && <ShowResultsPage allProperties={allProperties} allValues={allValues}/>}
    </PageContainer>
  );
};
export default Quiz;
