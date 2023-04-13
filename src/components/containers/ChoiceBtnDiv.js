import { Box } from "@mui/system";
import React from "react";

const ChoiceBtnDiv = ({children, parent}) => {

  const parentValues = {
    questions: {
      // paddingTop: "50px",
      paddingBottom: "7vh",
      padding: "10vw",
      position: "fixed",
      width: "80vw",

    },
    results: {
      paddingTop: "50px",
      paddingBottom: "7vh",
      position: "fixed",
      width: "93vw",
    },
  };

  const parentObject = parentValues[parent] || {};
  const { paddingTop, paddingBottom, position, width, padding } = parentObject;




  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 5,
        padding,
        paddingTop,
        paddingBottom,
        position,
        width,       
        bottom: 0,
        backgroundImage:
        "linear-gradient(0deg, rgba(255, 255, 255, 1) 75%, rgba(255, 255, 255, 0.8) 85%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      {children}
    </Box>
  );
};

export default ChoiceBtnDiv;
