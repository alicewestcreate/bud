import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import TopBar from "../components/TopBar";

const Layout = (props) => {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <main>{props.children}</main>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
