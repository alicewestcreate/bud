import React, { useState } from "react";
import ImageBox from "../../components/imagesTags/ImageBox";
import PlantName from "../../components/copy/PlantName";
import InfoButton from "../../components/buttons/InfoButton";
import PropertyTags from "../../components/buttons/PropertyTags";
import LikeDislikeButton from "../../components/buttons/LikeDislikeButton";

import Features from "./Features";
import getName from "../majorfunctions/getName";
import { Box } from "@mui/system";
import PageContainer from "../../components/PageContainer";
import ImageContainer from "../../components/ImageContainer";
import ImageFrame from "../../components/ImageFrame";
import TextContainer from "../../components/TextContainer";
import HeadingFrame from "../../components/HeadingFrame";
import QuizButtonContainer from "../../components/QuizButtonContainer";

const ResultsCard = ({ plantIndex, showNextCard }) => {
  const [displayFeatures, setDisplayFeatures] = useState(false);

  console.log("matched on", plantIndex);

  return (
    <PageContainer parent={"plant"}>
      <ImageContainer>
        <ImageFrame parent={"plant"}>
          <ImageBox parent={"results"} imagePath={plantIndex.Img} alt={""} />
        </ImageFrame>
      </ImageContainer>

      <TextContainer parent={"plant"}>

        <HeadingFrame parent={"plant"}>
          
          <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems:"flex-start"}}>
          <PlantName plantName={getName(plantIndex)} />

          <InfoButton
            setDisplayFeatures={setDisplayFeatures}
            displayFeatures={displayFeatures}
          />
          </Box>
          <Box sx={{display:"flex" }}>
          <PropertyTags properties={plantIndex.matchedOn} />

          
          </Box>
          {displayFeatures && <Features plantIndex={plantIndex} />}

     
        </HeadingFrame>
        <QuizButtonContainer parent={"plant"}>
          <LikeDislikeButton showNextCard={showNextCard} text={"no"}></LikeDislikeButton>
          <LikeDislikeButton showNextCard={showNextCard} text={"yes"}></LikeDislikeButton>
        </QuizButtonContainer>
      </TextContainer>


    </PageContainer>
  );
};

export default ResultsCard;
