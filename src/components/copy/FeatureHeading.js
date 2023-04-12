import { Typography } from "@mui/material";
import React from "react";

const FeatureHeading = ({ heading }) => {
  return (
    <Typography variant="h6" component={"h6"}>
      {heading}
    </Typography>
  );
};

export default FeatureHeading;
