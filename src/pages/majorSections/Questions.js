import React from "react";
import ImageBox from "../../components/imagesTags/ImageBox";
import ChoiceButton from "../../components/buttons/ChoiceButton";
import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import PageContainer from "../../components/PageContainer";

const Questions = ({
  functionsHandlers,
  currentQuestion,
  handlePreferencesUpdate,
}) => {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const [handleClickRight, handleClickLeft] = functionsHandlers;
  const bggradient =
    "linear-gradient(0deg, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0.6) 75%, rgba(255, 255, 255, 0) 100%)";

  if (isPortrait) {
    return (
      <>
      <PageContainer>
        {/* <Box
          className="quizContainer"
          sx={{
            display: "flex",
            flexDirection: "column", //row
            alignItems: "center",
            justifyContent: "center",
            height: "80vh", // N/A
            width: "100vw",
            padding: "2vw", // N/A
          }}
        > */}
          <Box
           className="imageContainer"
            sx={{
              // display: "flex",
              // flex: 1,
              // width: "47vw",
              // height: "90vh",
            }}
          >
            <Box
             className="imageFrame"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0 10rem 0 0",
                height: "75vh", //maxHeight: "100%",
                overflow: "hidden",
              }}
            >
              <ImageBox
              className="ImageBox"
                parent={"questions"}
                imagePath={currentQuestion.img}
                alt={"Cactus"}
              />
            </Box>
          </Box>

          <Box
          className = "TextFrame"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end", //center
              justifyContent: "space-between", //center
              // flex: 1, 
              gap: 3, // NA
              padding: "0 7vw", // NA
              paddingTop: "5vh", // NA
              height: "40vh", // 90vh
              marginTop: "-40vh", // NA
              backgroundImage: bggradient, // NA
            }}
          >
            <Box 
            className="headingFrame"
            
            sx={{ display: "flex", 
            flexGrow: 1 // NA
            // padding: "0 100px 0 50px", 
            // width: "80%

            }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{ 
                  fontSize: "3rem", //4REM
                  marginTop: "auto" }}
              >
                {currentQuestion.question}
              </Typography>
            </Box>

            <Box
            className = "ButtonContainer"
              sx={{
                // pt: 10,
                gap: 3,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                width: "100%", // 80%
              }}
            >
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
            </Box>
          </Box>
        {/* </Box> */}
        </PageContainer>
      </>
    );
  }

  if (isLandscape) {
    return (
      <>
      <PageContainer>
        {/* <Box
          className="quizContainer"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
          }}
        > */}
          <Box
            sx={{
              display: "flex",
              flex: 1,
              width: "47vw",
              height: "90vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0 10rem 0 0",
                maxHeight: "100%",
                overflow: "hidden",
              }}
            >
              <ImageBox
                parent={"questions"}
                imagePath={currentQuestion.img}
                alt={"Cactus"}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              width: "47vw",
              height: "90vh",
            }}
          >
            <Box
              sx={{ display: "flex", 
              // flexGrow: 1,
              padding: "0 100px 0 50px", 
              width: "80%" 
            }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: "4rem",
                  marginTop: "auto",
                }}
              >
                {currentQuestion.question}
              </Typography>
            </Box>
            <Box
              sx={{
                pt: 10,
                gap: 3,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                width: "80%",
              }}
            >
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
            </Box>
          </Box>
          </PageContainer>
        {/* </Box> */}
      </>
    );
  }
};

export default Questions;

// <>
// <ContainerForImage parent={"questions"}>
//   <ImageBox
//     parent={"questions"}
//     imagePath={currentQuestion.img}
//     alt={"Cactus"}
//   />
// </ContainerForImage>

// <TextDiv parent={"questions"}>
//   <QuestionHeading question={currentQuestion.question} />
// </TextDiv>

// <ChoiceBtnDiv parent={"questions"}>
//   <ChoiceButton
//     handleIt={handleClickLeft}
//     handlePreferencesUpdate={handlePreferencesUpdate}
//     color="third"
//     text={currentQuestion.filter.left.btnTxt}
//     propertyValue={currentQuestion.filter.left.property}
//     searchValue={currentQuestion.filter.left.searchVal}
//     featureValue={currentQuestion.filter.left.feature}
//   />
//   <ChoiceButton
//     handleIt={handleClickRight}
//     handlePreferencesUpdate={handlePreferencesUpdate}
//     color="secondary"
//     text={currentQuestion.filter.right.btnTxt}
//     propertyValue={currentQuestion.filter.right.property}
//     searchValue={currentQuestion.filter.right.searchVal}
//     featureValue={currentQuestion.filter.right.feature}
//   />
// </ChoiceBtnDiv>
// </>
