import React from "react";
import ContainerForImage from "../../components/containers/ContainerForImage";
import ImageBox from "../../components/imagesTags/ImageBox";
import TextDiv from "../../components/containers/TextDiv";
import QuestionHeading from "../../components/copy/QuestionHeading";
import ChoiceBtnDiv from "../../components/containers/ChoiceBtnDiv";
import ChoiceButton from "../../components/buttons/ChoiceButton";
import questions from "../../data/questions.json";

const Questions = ({ showNextQuestion, questIndex }) => {
  return (
    <>
      <ContainerForImage parent={"questions"}>
        <ImageBox parent={"questions"} imagePath={questions[questIndex].img} alt={"Cactus"} />
      </ContainerForImage>

      <TextDiv parent={"questions"}>
        <QuestionHeading question={questions[questIndex].question} />
      </TextDiv>
      <ChoiceBtnDiv parent={"questions"}>
          <ChoiceButton
            showNextQuestion={showNextQuestion}
            color="third"
            text={questions[0].filter.left.btnTxt}
          />
          <ChoiceButton
            showNextQuestion={showNextQuestion}
            color="secondary"
            text={questions[0].filter.right.btnTxt}
          />
        </ChoiceBtnDiv>
    </>
  );
};

export default Questions;
