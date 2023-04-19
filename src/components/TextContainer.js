import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system"

const TextContainer = (props) => {
    const isPortrait = useMediaQuery("(orientation: portrait)");
    const isLandscape = useMediaQuery("(orientation: landscape)");
    
    const styles = {
        display: "flex",
        flexDirection: "column",
        ...(isPortrait
          ? {
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: "40vh",
            gap: 3,
            padding: "0 7vw",
            paddingTop: "5vh",
            marginTop: "-40vh",
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
        className="imageFrame"
        sx={styles}
       > 
       {props.children}
       </Box>
    
    );
}


export default TextContainer;
