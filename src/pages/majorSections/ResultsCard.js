import React, { useState } from "react";
import ContainerForImage from "../../components/containers/ContainerForImage";
import ImageBox from "../../components/imagesTags/ImageBox";
import TextDiv from "../../components/containers/TextDiv";
import PlantName from "../../components/copy/PlantName";
import InfoButton from "../../components/buttons/InfoButton";
import PropertyTags from "../../components/buttons/PropertyTags";
import ChoiceBtnDiv from "../../components/containers/ChoiceBtnDiv";
import LikeDislikeButton from "../../components/buttons/LikeDislikeButton";

import Features from "./Features";
import getName from "../majorfunctions/getName";
import { Box } from "@mui/system";

const ResultsCard = ({ plantIndex, showNextCard }) => {
  const [displayFeatures, setDisplayFeatures] = useState(false);

  console.log("matched on", plantIndex);

  return (

    <Box sx={{display: "flex", flexDirection: "column"}}>
      <ContainerForImage parent={"results"}>
        <ImageBox parent={"results"} imagePath={plantIndex.Img} alt={""} />
      </ContainerForImage>
      <TextDiv parent={"results"}>
        <PlantName plantName={getName(plantIndex)} />
        <InfoButton
          setDisplayFeatures={setDisplayFeatures}
          displayFeatures={displayFeatures}
        />
        <PropertyTags properties={plantIndex.matchedOn} />
        {displayFeatures && <Features plantIndex={plantIndex} />}
      </TextDiv>

      <ChoiceBtnDiv parent={"results"}>
        <LikeDislikeButton
          showNextCard={showNextCard}
          text={"no"}
        ></LikeDislikeButton>
        <LikeDislikeButton
          showNextCard={showNextCard}
          text={"yes"}
        ></LikeDislikeButton>
      </ChoiceBtnDiv>
      </Box>
  );
};

export default ResultsCard;
