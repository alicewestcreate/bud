import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React from "react";

const QuestionHeading = (props) => {
  const isMobilePortrait = useMediaQuery("(max-width: 767px) and (orientation: portrait)");
  const isMobileLandscape = useMediaQuery("(max-width: 900px) and (orientation: landscape)");
  const isDesktopLandscape = useMediaQuery("(min-width: 901px) and (orientation: landscape)");

  const styles = {
    marginTop: "auto",
    ...(isMobilePortrait
      ? {
        fontSize: "200%",
        }
      : isMobileLandscape
      ? {
        fontSize: "200%",
        }
      : isDesktopLandscape
        ? {
          fontSize: "400%",
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
