import React from "react";

import PageContainer from "../components/PageContainer";
import ContainerForImage from "../components/ContainerForImage";
import ImageBox from "../components/ImageBox";
import TextDiv from "../components/TextDiv";
import QuestionHeading from "../components/QuestionHeading";
import ChoiceBtnDiv from "../components/ChoiceBtnDiv";
import ChoiceButton from "../components/ChoiceButton";

import backgroundImage from "../components/images/robustCatus.webp";
import questions from "../data/questions.json";

const Quiz = () => {
  return (
    <PageContainer>

      <ContainerForImage>
        <ImageBox src={backgroundImage} alt={"Catus"} />
      </ContainerForImage>

      <TextDiv>
        <QuestionHeading question={questions[0].question} />
        
        <ChoiceBtnDiv>
          <ChoiceButton color="third" text={questions[0].filter.left.btnTxt} />
          <ChoiceButton color="secondary" text={questions[0].filter.right.btnTxt}/>
        </ChoiceBtnDiv>
      </TextDiv>

    </PageContainer>
  );
};
export default Quiz;
