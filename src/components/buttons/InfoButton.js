import React from 'react';
import { Box } from '@mui/system';


const InfoButton = ({displayFeatures, setDisplayFeatures }) => {

    const handleClick = () => {
      setDisplayFeatures(!displayFeatures);
      };
    
    return (
        <Box
        onClick={() => handleClick()}
        
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          bgcolor: "#FE267B",
          color: "white",
          borderRadius: "50px",
          height: "25px",
          width: "25px",
 
    
        }}
      >
        i
      </Box>



    );
}

export default InfoButton;
