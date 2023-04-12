import React from "react";
import FeatureCopy from "../copy/FeatureCopy";
import FeatureHeading from "../copy/FeatureHeading";

const Light = ({ plantIndex }) => {

  // (4) ['Diffuse light ( Less than 5,300 lux / 500 fc)', null, 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)', 'Full sun (+21,500 lux /+2000 fc )']

  const Light = (plantIndex) => {
    switch (plantIndex["Light tolered"]) {
      case "Diffuse light ( Less than 5,300 lux / 500 fc)":
        return "I dont mind the diffused lighting";

      case "Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)":
        return "I quite like the a strong light";
      case "Full sun (+21,500 lux /+2000 fc )":
        return "Please I am fellow sunseeker, only full sunshine please";
      default:
        return "Surprise Me";
    }
  };

  return (
    <>
      <FeatureHeading heading={"Sunshine"}></FeatureHeading>
      <FeatureCopy copy={Light(plantIndex)}></FeatureCopy>
    </>
  );
};

export default Light;
