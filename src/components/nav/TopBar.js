import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import logo from "../../images/logo.png";
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <>
      <AppBar position="fixed" color="" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ backgroundColor: "white" }}>
        <Button component={RouterLink} to="/" color="inherit">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <img src={logo} alt="Logo" width="30" height="30" marginBottom="10px"/>
            <Typography
              variant="h3"
              component="h3"
              sx={{textTransform: "lowercase", fontSize: "1.5rem"}}

              >
              bud
            </Typography>
          </Box>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
