import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import TopBar from "../components/TopBar";

const Layout = (props) => {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <div>
          <TopBar />
        </div>
        <main>{props.children}</main>
        <nav>
          <NavBar />
        </nav>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
