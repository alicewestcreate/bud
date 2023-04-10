import React from "react";
import NavItem from "./NavItem";
import { AppBar } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0, display: 'flex', justifyContent: 'center' }}>
        <NavItem></NavItem>
    </AppBar>
  );
};

export default NavBar;
