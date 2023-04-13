import { Typography } from "@mui/material";
import React from "react";

const FeatureCopy = ({ copy }) => {
  return (
    <Typography variant="body1" component={"p"} sx={{px:2}}>
      {copy}
    </Typography>
  );
};

export default FeatureCopy;
