import React from "react";
import ContainerForImage from "../../components/containers/ContainerForImage";
import ImageBox from "../../components/imagesTags/ImageBox";
import TextDiv from "../../components/containers/TextDiv";
import QuestionHeading from "../../components/copy/QuestionHeading";
import ChoiceBtnDiv from "../../components/containers/ChoiceBtnDiv";
import ChoiceButton from "../../components/buttons/ChoiceButton";
import questions from "../../data/questions.json";

const Questions = ({ functionsHandlers, currentQuestion, storePreference }) => {

  const[handleClickRight, handleClickLeft ] =  functionsHandlers

  return (
    <>
      <ContainerForImage parent={"questions"}>
        <ImageBox
          parent={"questions"}
          imagePath={currentQuestion.img}
          alt={"Cactus"}
        />
      </ContainerForImage>

      <TextDiv parent={"questions"}>
        <QuestionHeading question={currentQuestion.question} />
      </TextDiv>

      <ChoiceBtnDiv parent={"questions"}>
        <ChoiceButton
          handleIt={handleClickLeft}
          storePreference={storePreference}
          color="third"
          text={currentQuestion.filter.left.btnTxt}
          property={currentQuestion.filter.left.property}
          searchVal={currentQuestion.filter.left.searchVal}
          feature={currentQuestion.filter.left.feature}
        />
        <ChoiceButton
            handleIt={handleClickRight}
            storePreference={storePreference}
            color="secondary"
            text={currentQuestion.filter.right.btnTxt}
            property={currentQuestion.filter.right.property}
            searchVal={currentQuestion.filter.right.searchVal}
            feature={currentQuestion.filter.right.feature}

          />
      </ChoiceBtnDiv>
    </>
  );
};

export default Questions;
