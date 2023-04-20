import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";


const ImageFrame = (props) => {
    const isPortrait = useMediaQuery("(orientation: portrait)");
    const isLandscape = useMediaQuery("(orientation: landscape)");
    
    const styles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: props.parent === "quiz" ? "0 10rem 0 0" : "0 0 30rem 30rem",
        overflow: "hidden",
        ...(isPortrait
          ? {
            height: props.parent === "quiz" ? "75vh" : "95vw",
            width: props.parent === "quiz" ? "auto" : "95vw",
            }
          : isLandscape
          ? {
            maxHeight: props.parent === "quiz" ? "100%" : "100vw",
            width: props.parent === "quiz" ? "100%" : "100vw",
            
            }
          : {}),
      };
    
    
    return (
        <Box
        className="imageFrame"
        sx={styles}
       > 
       {props.children}
       </Box>
    
    );
}

export default ImageFrame;
