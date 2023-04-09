import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import logo from "./images/logo.png";

const TopBar = () => {
  return (
    <>
      <AppBar position="static" color="" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ height: "56px", bgcolor: "primary.main" }}></Toolbar>
        <Toolbar sx={{ backgroundColor: "white" }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <img src={logo} alt="Logo" width="30" height="30"/>
            <Typography
              variant="h3"
              component="h3">
              bud
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
