import React, { useState } from "react";
import PageContainer from "../components/containers/PageContainer";
import Questions from "./majorSections/Questions";
import questions from "../data/questions.json";
import ShowResultsPage from "./majorSections/ShowResultsPage";


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



  return (
    <PageContainer parent={"question"}>
      {showQuestion && (
        <Questions
          questIndex={questIndex}
          showNextQuestion={showNextQuestion}

          // questionNumber={0}
          // displayQuestionCard={displayQuestionCard}
          // storePreference={storePreference}
        />
      )}
      {showResultsButton && <ShowResultsPage />}
    </PageContainer>
  );
};
export default Quiz;
