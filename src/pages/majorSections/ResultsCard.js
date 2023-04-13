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
import getName from "../majorfunctions/getName"

const ResultsCard = ({ dummyInfo, plantIndex, showNextCard}) => {

  
  const [displayFeatures, setDisplayFeatures] = useState(false);



  return (
    <>
      <ContainerForImage parent={"results"}>
        <ImageBox parent={"results"} imagePath={plantIndex.Img} alt={""} />
      </ContainerForImage>
      <TextDiv parent={"results"}>
        <PlantName dummyInfo={getName(plantIndex)} />
        <InfoButton
          setDisplayFeatures={setDisplayFeatures}
          displayFeatures={displayFeatures}
        />
        
        <PropertyTags properties={dummyInfo[0].properties} />
    
        {displayFeatures && <Features plantIndex={plantIndex}/>}


        <ChoiceBtnDiv>
          <LikeDislikeButton showNextCard={showNextCard} text={"yes"}></LikeDislikeButton>
          <LikeDislikeButton showNextCard={showNextCard} text={"no"} ></LikeDislikeButton>
        </ChoiceBtnDiv>
      </TextDiv>
    </>
  );
};

export default ResultsCard;
