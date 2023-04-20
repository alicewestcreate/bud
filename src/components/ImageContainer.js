import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const ImageContainer = (props) => {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const styles = {
    ...(isPortrait
      ? {
       
        }
      : isLandscape
      ? {
          display: "flex",
          flex: 1,
          width: "47vw",
          height: "90vh",
          // flex: "0 0 auto",
        }
      : {}),
  };

  return (
    <Box className="ImageContainer" sx={styles}>
      {props.children}
    </Box>
  );
};

export default ImageContainer;
