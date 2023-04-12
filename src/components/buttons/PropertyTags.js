import { Box } from "@mui/system";
import React from "react";
import CustomButton from "../../themes/CustomButton";

const PropertyTags = ({ properties  }) => {

  const PropertyTag = () =>
  properties.map((property, index) => ( <CustomButton variant="outlined" type="tag" key={index}>
    {property}
  </CustomButton>
  ));


  return (
    <Box>
    <PropertyTag/>
    </Box>
  );
};

export default PropertyTags;
