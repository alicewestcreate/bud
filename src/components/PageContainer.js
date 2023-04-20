import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const PageContainer = (props) => {
    const isPortrait = useMediaQuery("(orientation: portrait)");
    const isLandscape = useMediaQuery("(orientation: landscape)");
  
    const styles = {
      display: "flex",
      margin: " 0 10px",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "80vh", //"calc(100vh - 200px)",

      
      ...(isPortrait
        ? {
            flexDirection: "column",
            // height: "80vh",
            padding: "2vw",
            overflowX: "clip",

          }
        : isLandscape
        ? {
            paddingTop: "50px",
            flexDirection: "row",
            overflow: "hidden",
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

