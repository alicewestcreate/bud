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
        borderRadius: "0 10rem 0 0",
        overflow: "hidden",
        ...(isPortrait
          ? {
            height: "75vh",
            }
          : isLandscape
          ? {
            maxHeight: "100%",
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
