import React, { useState } from "react";
import { Box } from "@mui/system";
import ContainerForImage from "../../components/containers/ContainerForImage";
import ImageBox from "../../components/imagesTags/ImageBox";
import TextDiv from "../../components/containers/TextDiv";
import PlantName from "../../components/copy/PlantName"
import InfoButton from "../../components/buttons/InfoButton";
import PropertyTags from "../../components/buttons/PropertyTags";
import ChoiceBtnDiv from "../../components/containers/ChoiceBtnDiv";
import ChoiceButton from "../../components/buttons/ChoiceButton";
import Features from "./Features";

const ResultsCard = ({ dummyInfo }) => {
  const [displayProperties, setDisplayProperties] = useState(false);



  return (
    <>
      <ContainerForImage parent={"results"}>
        <ImageBox imagePath={dummyInfo[0].image} alt={""} />
      </ContainerForImage>

      <TextDiv parent={"results"}>
        <PlantName dummyInfo={dummyInfo[0].name}/>
        <InfoButton
          setDisplayProperties={setDisplayProperties}
          displayProperties={displayProperties}
        />
          <PropertyTags properties ={dummyInfo[0].properties}/>
    
        {displayProperties && <Features />}

        <ChoiceBtnDiv>
          <ChoiceButton text={"yes"}></ChoiceButton>
          <ChoiceButton text={"no"}></ChoiceButton>
        </ChoiceBtnDiv>
      </TextDiv>
    </>
  );
};

export default ResultsCard;
