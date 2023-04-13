import React from "react";
import ContainerForImage from "../../components/containers/ContainerForImage";
import ImageBox from "../../components/imagesTags/ImageBox";
import TextDiv from "../../components/containers/TextDiv";
import QuestionHeading from "../../components/copy/QuestionHeading";
import ChoiceBtnDiv from "../../components/containers/ChoiceBtnDiv";
import ChoiceButton from "../../components/buttons/ChoiceButton";
import questions from "../../data/questions.json";

const Questions = ({ showNextQuestion, questIndex, storePreference }) => {


  return (
    <>
      <ContainerForImage parent={"questions"}>
        <ImageBox
          parent={"questions"}
          imagePath={questions[questIndex].img}
          alt={"Cactus"}
        />
      </ContainerForImage>

      <TextDiv parent={"questions"}>
        <QuestionHeading question={questions[questIndex].question} />
      </TextDiv>

      <ChoiceBtnDiv parent={"questions"}>
        <ChoiceButton
          showNextQuestion={showNextQuestion}
          storePreference={storePreference}
          color="third"
          text={questions[questIndex].filter.left.btnTxt}
          property={questions[questIndex].filter.left.property}
          searchVal={questions[questIndex].filter.left.searchVal}
          feature={questions[questIndex].filter.left.feature}
        />
        <ChoiceButton
            showNextQuestion={showNextQuestion}
            storePreference={storePreference}
            color="secondary"
            text={questions[questIndex].filter.right.btnTxt}
            property={questions[questIndex].filter.right.property}
            searchVal={questions[questIndex].filter.right.searchVal}
            feature={questions[questIndex].filter.right.feature}

          />
      </ChoiceBtnDiv>
    </>
  );
};

export default Questions;
