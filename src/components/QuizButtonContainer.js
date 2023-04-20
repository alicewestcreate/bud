import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const QuizButtonContainer = (props) => {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const styles = {
    gap: 3,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundImage: "linear-gradient(0deg, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0.7) 90%, rgba(255, 255, 255, 0) 100%)",
    // paddingBottom: 
    // bgcolor: "black",
    ...(isPortrait
      ? {
          // width: "100%",
          pt:2,
          position: props.parent === "quiz" ? "sticky" : "sticky",
          bottom: props.parent === "quiz" ? "80px" : "0",
          left: props.parent === "quiz" ? "0" : "0",
          width: "80%",
          alignSelf: "center",
          padding: props.parent === "quiz" ? "auto" : "40px 10% 80px 10%",

        }
      : isLandscape
      ? {
          width: "80%",
          pt: 5,
        }
      : {}),
  };

  return (
    <Box className="ButtonBox" sx={styles}>
      {props.children}
    </Box>
  );
};

export default QuizButtonContainer;
