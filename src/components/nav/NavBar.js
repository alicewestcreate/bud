import React from "react";
import NavItem from "./NavItem";
import { AppBar } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar color="primary" sx={{ height: "35px", top: "auto", bottom: 0, display: 'flex', justifyContent: 'center',  position:"fixed" }}>
        <NavItem></NavItem>
    </AppBar>
  );
};

export default NavBar;
