import React from "react";
import { Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import GradientBkgnd from "../components/containers/GradientBkgnd";

const Home = () => {
  return (
    <GradientBkgnd>
      <Typography variant="h1" component="h1" align="center" sx={{ px: 4, py:2 }}>
        Who needs love, when you can have a bud?
      </Typography>
      <Typography variant="body2" component="p" align="center" sx={{ px: 4, py:2 }}>
        Transform your space with the perfect plant companion. Discover your
        match with bud's quiz now!
      </Typography>

      <Button
        component={RouterLink}
        to="/quiz"
        variant="contained"
        color="secondary"
        sx={{my:2, borderRadius: "20px", textTransform: "none" }}
      >
        find your bud
      </Button>

      <Typography
        variant="body2"
        component="p"
        align="center"
        sx={{ p: 4, pt: 2 }}
      >
        bud, the dating app for plants.
      </Typography>
    </GradientBkgnd>
  );
};

export default Home;
