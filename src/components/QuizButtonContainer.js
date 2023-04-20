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
    ...(isPortrait
      ? {
          // width: "100%",
          pt:2,
          position: props.parent === "quiz" ? "inherit" : "sticky",
          bottom: props.parent === "quiz" ? "auto" : "80px",
          left: props.parent === "quiz" ? "auto" : "0",
          width: "80%",
          alignSelf: "center",

        }
      : isLandscape
      ? {
          width: "80%",
          pt: 5,
        }
      : {}),
  };

  return (
    <Box className="" sx={styles}>
      {props.children}
    </Box>
  );
};

export default QuizButtonContainer;
