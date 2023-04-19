import React from "react";
import ImageBox from "../../components/imagesTags/ImageBox";
import ChoiceButton from "../../components/buttons/ChoiceButton";
import PageContainer from "../../components/PageContainer";
import ImageFrame from "../../components/ImageFrame";
import ImageContainer from "../../components/ImageContainer";
import TextContainer from "../../components/TextContainer";
import HeadingFrame from "../../components/HeadingFrame";
import QuestionHeading from "../../components/QuestionHeading";
import QuizButtonContainer from "../../components/QuizButtonContainer";

const Questions = ({
  functionsHandlers,
  currentQuestion,
  handlePreferencesUpdate,
}) => {
  // const isPortrait = useMediaQuery("(orientation: portrait)");
  // const isLandscape = useMediaQuery("(orientation: landscape)");

  const [handleClickRight, handleClickLeft] = functionsHandlers;
    return (
      <>
      <PageContainer>
          <ImageContainer>
            <ImageFrame>
              <ImageBox className="ImageBox" parent={"questions"} imagePath={currentQuestion.img} alt={"Cactus"}/>
            </ImageFrame>
          </ImageContainer>
          <TextContainer>
            <HeadingFrame>
              <QuestionHeading>
                {currentQuestion.question}
                </QuestionHeading>
              </HeadingFrame>
              <QuizButtonContainer> 
              <ChoiceButton
                handleIt={handleClickLeft}
                handlePreferencesUpdate={handlePreferencesUpdate}
                color="third"
                text={currentQuestion.filter.left.btnTxt}
                propertyValue={currentQuestion.filter.left.property}
                searchValue={currentQuestion.filter.left.searchVal}
                featureValue={currentQuestion.filter.left.feature}
              />
              <ChoiceButton
                handleIt={handleClickRight}
                handlePreferencesUpdate={handlePreferencesUpdate}
                color="secondary"
                text={currentQuestion.filter.right.btnTxt}
                propertyValue={currentQuestion.filter.right.property}
                searchValue={currentQuestion.filter.right.searchVal}
                featureValue={currentQuestion.filter.right.feature}
              />
            </QuizButtonContainer>
          </TextContainer>
        </PageContainer>
      </>
    );
  }

export default Questions;