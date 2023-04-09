import React from "react";
import NavItem from "./NavItem";
import { AppBar, Toolbar } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <NavItem></NavItem>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
