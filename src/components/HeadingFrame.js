import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const HeadingFrame = (props) => {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const styles = {
    display: "flex",

    ...(isPortrait
      ? {
          flexGrow: 1,
        }
      : isLandscape
      ? {
          padding: "0 100px 0 50px",
          width: "80%",
        }
      : {}),
  };

  return (
    <Box className="imageFrame" sx={styles}>
      {props.children}
    </Box>
  );
};

export default HeadingFrame;
