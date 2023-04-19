import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React from "react";

const QuestionHeading = (props) => {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const styles = {
    marginTop: "auto",
    ...(isPortrait
      ? {
        fontSize: "3rem",
        }
      : isLandscape
      ? {
        fontSize: "4rem",
        }
      : {}),
  };

  return (
    <Typography variant="h1" component="h1" sx={styles}>
      {props.children}
    </Typography>
  );
};

export default QuestionHeading;
