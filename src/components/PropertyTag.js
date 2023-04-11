import { Button } from "@mui/material";
import React from "react";
import CustomButton from "../pages/CustomButton";

const PropertyTag = ({property}) => {
  return (
<CustomButton variant="outlined" type="tag">{property}</CustomButton>
  );
};

export default PropertyTag;
