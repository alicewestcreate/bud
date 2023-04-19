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
          width: "100%",
        }
      : isLandscape
      ? {
          width: "80%",
          pt: 10,
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
