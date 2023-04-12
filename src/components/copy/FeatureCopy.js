import { Typography } from "@mui/material";
import React from "react";

const FeatureCopy = ({ copy }) => {
  return (
    <Typography variant="body1" component={"p"}>
      {copy}
    </Typography>
  );
};

export default FeatureCopy;
