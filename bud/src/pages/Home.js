import { Typography, Button } from "@mui/material";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";

const Home = () => {

  return (
    <BackgroundGradient>
      <Typography variant="h1" component="h1" align="center"sx={{p:4}}>
        find your new bud
      </Typography>

      <Button variant="contained" color="secondary" sx={{ borderRadius: '20px', textTransform: "none" }}>
        take the quiz
      </Button>
   </BackgroundGradient> 
  );
};

export default Home;
