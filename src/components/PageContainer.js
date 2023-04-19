import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const PageContainer = (props) => {
    const isPortrait = useMediaQuery("(orientation: portrait)");
    const isLandscape = useMediaQuery("(orientation: landscape)");
  
    const styles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      ...(isPortrait
        ? {
            flexDirection: "column",
            height: "80vh",
            padding: "2vw",
          }
        : isLandscape
        ? {
            flexDirection: "row",
          }
        : {}),
    };
  
    return (
      <Box className="quizContainer" sx={styles}>
        {props.children}
      </Box>
    );
  };

export default PageContainer;

