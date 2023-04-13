import React, {useState, useContext} from "react";
import dummyInfo from "../data/dummyApi.json";
import plant from "../data/plants.json"
import ResultsCard from "./majorSections/ResultsCard";
import PageContainer from "../components/containers/PageContainer";
import QuizContext from "./QuizContext";

const Results = () => {
  const { collectedVariables } = useContext(QuizContext);

  let [resultIndex, setResultIndex] = useState(0)

  console.log(collectedVariables);

  const storeInFavorites = () => {
    console.log("stored");
  }


  const showNextCard = (text) => {
    let addOne = resultIndex + 1;
    setResultIndex(addOne);
    if (text === "yes") {
      storeInFavorites()
    }

  }


  return (

    <PageContainer parent={"results"}>
    <ResultsCard dummyInfo = {dummyInfo} plantIndex = {plant[resultIndex]} showNextCard = {showNextCard}></ResultsCard>
    </PageContainer>
  );
};

export default Results;
