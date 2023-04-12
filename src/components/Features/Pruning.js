import { Typography } from "@mui/material";
import React from "react";
import FeatureCopy from "../copy/FeatureCopy";
import FeatureHeading from "../copy/FeatureHeading";

const Pruning = ({ plantIndex }) => {
  const pruning = (plantIndex) => {
    switch (plantIndex["Pruning"]) {
      case "If needed":
        return "I'm chilled, only when you feel like I need it";
      case "Never":
        return "I'm super easy and I'll never need a trim";
      case "After blooming":
        return "Once I've flowered, it's always nice to have my ends trimmed a little";
      case "Fall":
        return "Once a year, around autumn is the time";
      default:
        return "I'll let you decide.";
    }
  };

  return (
    <>
      <FeatureHeading heading={"Hair Cut"}></FeatureHeading>
      <FeatureCopy copy={pruning(plantIndex)}></FeatureCopy>
    </>
  );
};

export default Pruning;
