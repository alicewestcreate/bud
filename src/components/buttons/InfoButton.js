import React from 'react';
import { Box } from '@mui/system';


const InfoButton = ({displayProperties, setDisplayProperties }) => {

    const handleClick = () => {
        setDisplayProperties(!displayProperties);
      };
    
    return (
        <Box
        onClick={() => handleClick()}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "black",
          color: "white",
          position: "absolute",
          right: 20,
          top: "45px",
          borderRadius: "50%",
          height: "25px",
          width: "25px",
        }}
      >
        i
      </Box>



    );
}

export default InfoButton;
