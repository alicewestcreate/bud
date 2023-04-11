import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ChoiceBtnDiv from "../components/containers/ChoiceBtnDiv";
import ChoiceButton from "../components/buttons/ChoiceButton";
import ContainerForImage from "../components/containers/ContainerForImage";
import ImageBox from "../components/imagesTags/ImageBox";
import PageContainer from "../components/containers/PageContainer";
import PropertyTag from "../components/buttons/PropertyTag";
import TextDiv from "../components/containers/TextDiv";
import dummyInfo from "../data/dummyApi.json";
const Results = () => {

  const [displayProperties, setDisplayProperties] = useState(false);

  const handleClick = () => {
    console.log(displayProperties);
    console.log("clicked");
    setDisplayProperties(!displayProperties)
    console.log(displayProperties);

  }
  
  const PropertyTags = () => 
  dummyInfo[0].properties.map((property, index) => 
  <PropertyTag property={property} key={index}></PropertyTag>)



  return (

    <PageContainer parent={"results"}>
      <ContainerForImage parent={"results"} >
        <ImageBox imagePath={dummyInfo[0].image} alt={"Cactus"} />
      </ContainerForImage>

      <TextDiv parent={"results"}>
        <Typography variant="h1" textAlign="left" lineHeight={1.3} sx={{py:2}}>
          {dummyInfo[0].name}
        </Typography>
        <Box onClick={()=>handleClick()} sx={{display: "flex", alignItems:"center", justifyContent:"center", bgcolor:"black", color:"white", position: "absolute", right:20, top: "45px", borderRadius:"50%", height: "25px", width: "25px"}}>i</Box>
        <Box>
          <PropertyTags />
        </Box>


       {(displayProperties) && (<Box sx={{width:"100vw", height:"50vh"}}></Box>)}

        <ChoiceBtnDiv>
          <ChoiceButton text={"yes"}></ChoiceButton>
          <ChoiceButton text={"no"}></ChoiceButton>
        </ChoiceBtnDiv>
      </TextDiv>
    </PageContainer>
  );
};

export default Results;
