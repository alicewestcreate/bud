import React from "react";
import dummyInfo from "../data/dummyApi.json";
import ResultsCard from "./majorSections/ResultsCard";
import PageContainer from "../components/containers/PageContainer";

const Results = () => {



  return (
    
    <PageContainer parent={"results"}>
    <ResultsCard dummyInfo = {dummyInfo}></ResultsCard>
    </PageContainer>
  );
};

export default Results;
