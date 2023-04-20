import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const HeadingFrame = (props) => {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const styles = {
    display: "flex",
    flexDirection: "column",
    ...(isPortrait
      ? {
          flexGrow: 1,
          justifyContent: "flex-end",
          paddingBottom: props.parent === "quiz" ? "auto" : "100px",
          width: "80%",
          alignSelf: "center",
          
        }
      : isLandscape
      ? {
          padding: props.parent === "quiz" ? "0 100px 0 50px" : "100px 0 0 0",
          width: "80%",
          overflow: props.parent === "quiz" ? "none" : "scroll",
        }
      : {}),
  };

  return (
    <Box className="headingFrame" sx={styles}>
      {props.children}
    </Box>
  );
};

export default HeadingFrame;
