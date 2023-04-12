import React from "react";
import { Typography, Button } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import GradientBkgnd from "../components/containers/GradientBkgnd";

const Home = () => {


  return (
    <GradientBkgnd>
      <Typography variant="h1" component="h1" align="center"sx={{p:4}}>
        find your new bud
      </Typography>

      <Button component={RouterLink} to="/quiz" variant="contained" color="secondary" sx={{ borderRadius: '20px', textTransform: "none" }}>
        take the quiz
      </Button>
   </GradientBkgnd> 
  );
};

export default Home;
