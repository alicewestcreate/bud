import React, { useState, useContext } from "react";
import plants from "../data/plants.json"
import ResultsCard from "./majorSections/ResultsCard";
import PageContainer from "../components/containers/PageContainer";
import QuizPreferences from "../components/contexts/QuizPreferences";
import { filterPreferences } from "./majorfunctions/filterPreferences";

const Results = () => {

  const { userPreferences } = useContext(QuizPreferences);
  
  console.log("USER PREFERENCE",userPreferences);


  let [resultIndex, setResultIndex] = useState(0);

  const matchedResults = filterPreferences(plants, userPreferences);

  const storeInFavorites = () => {
    console.log("stored");
  };

  const showNextCard = (text) => {
    let addOne = resultIndex + 1;
    setResultIndex(addOne);
    if (text === "yes") {
      storeInFavorites();
    }
  };

  return (
    <PageContainer parent={"results"}>
      <ResultsCard
        plantIndex={matchedResults[resultIndex]}
        showNextCard={showNextCard}
      ></ResultsCard>
    </PageContainer>
  );
};

export default Results;
