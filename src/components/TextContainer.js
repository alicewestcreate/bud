import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system"

const TextContainer = (props) => {
    const isPortrait = useMediaQuery("(orientation: portrait)");
    const isLandscape = useMediaQuery("(orientation: landscape)");
    
    const styles = {
        display: "flex",
        flexDirection: "column",
        width:"100%",
        ...(isPortrait
          ? {
            // alignItems: "flex-end",
            justifyContent: "space-between",
            height: props.parent === "quiz" ? "40vh" : "35vh",
            gap: 3,
            padding: "0 10px",
            paddingTop: props.parent === "quiz" ? "5vh" : "0",
            marginTop: props.parent === "quiz" ? "-40vh" : "0",
            backgroundImage: "linear-gradient(0deg, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0.6) 75%, rgba(255, 255, 255, 0) 100%)",
            }
          : isLandscape
          ? {
            height: "90vh",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            }
          : {}),
      };
    
    
    return (
        <Box
        className="TextContainer"
        sx={styles}
       > 
       {props.children}
       </Box>
    
    );
}


export default TextContainer;
