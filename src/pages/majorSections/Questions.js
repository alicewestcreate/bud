import React from "react";
import ContainerForImage from "../../components/containers/ContainerForImage";
import ImageBox from "../../components/imagesTags/ImageBox";
import TextDiv from "../../components/containers/TextDiv";
import QuestionHeading from "../../components/copy/QuestionHeading";
import ChoiceBtnDiv from "../../components/containers/ChoiceBtnDiv";
import ChoiceButton from "../../components/buttons/ChoiceButton";

const Questions = ({ functionsHandlers, currentQuestion, handlePreferencesUpdate}) => {


 // eslint-disable-next-line no-unused-vars
  // const { userPreferences, setUserPreferences } = useContext(QuizPreferences); // Stores quizdata & transfered to results page.

  // const [quizData, setQuizData] = useState({ // store all properties searchvalues and features. 
  //   allProperties: [],
  //   allValues: [],
  //   allFeatures: [],
  // });
  
  // const handlePreferencesUpdate = (newProperty, newValue, newFeature ) => {

  //   setQuizData(prevState => ({
  //     allProperties: [...prevState.allProperties, newProperty],
  //     allValues: [...prevState.allValues, newValue],
  //     allFeatures: [...prevState.allFeatures, newFeature]
  //       }));
  // console.log("updateing setQuiz");
  //  setUserPreferences(quizData)

  // }

  // useEffect(() => {
  //   console.log(quizData.allValues)

  // }, [quizData.allValues]);




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
          handlePreferencesUpdate = {handlePreferencesUpdate}
          color="third"
          text={currentQuestion.filter.left.btnTxt}
          propertyValue={currentQuestion.filter.left.property}
          searchValue={currentQuestion.filter.left.searchVal}
          featureValue={currentQuestion.filter.left.feature}
        />
        <ChoiceButton
            handleIt={handleClickRight}
            handlePreferencesUpdate = {handlePreferencesUpdate}
            color="secondary"
            text={currentQuestion.filter.right.btnTxt}
            propertyValue={currentQuestion.filter.right.property}
            searchValue={currentQuestion.filter.right.searchVal}
            featureValue={currentQuestion.filter.right.feature}

          />
      </ChoiceBtnDiv>
    </>
  );
};

export default Questions;
