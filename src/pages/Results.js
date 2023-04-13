import React, {useState, useContext} from "react";
import dummyInfo from "../data/dummyApi.json";
import plants from "../data/plants.json"
import ResultsCard from "./majorSections/ResultsCard";
import PageContainer from "../components/containers/PageContainer";
import QuizContext from "./QuizContext";
import { filterPreferences } from "./majorfunctions/filterPreferences";

const Results = () => {

  const { collectedVariables } = useContext(QuizContext);
  let [resultIndex, setResultIndex] = useState(0)

  const { allProperties, allValues, allFeatures } = collectedVariables
  console.log(allProperties, allValues);

  const matchedResults = filterPreferences(plants, allProperties, allValues, allFeatures)

  const storeInFavorites = () => {
    console.log("stored");
  }

  console.log(matchedResults);
  console.log(matchedResults[0].matchdOn);


  const showNextCard = (text) => {
    let addOne = resultIndex + 1;
    setResultIndex(addOne);
    if (text === "yes") {
      storeInFavorites()
    }
  }

  console.log("matched index",matchedResults[resultIndex]);
  return (

    <PageContainer parent={"results"}>
    <ResultsCard dummyInfo = {dummyInfo} plantIndex={matchedResults[resultIndex]} showNextCard = {showNextCard}></ResultsCard>
    </PageContainer>
  );
};

export default Results;
