import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import TopBar from "../components/TopBar";


const Layout = (props) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <TopBar />
      </Box>
      <Box sx={{ display: "flex"}}>
      {props.children}
      </Box>
      <Box sx={{ display: "flex" }}>
        <NavBar />
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
