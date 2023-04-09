import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';

const Layout = (props) => {
    return (
        <>
        <main>
            {props.children}
        </main>
        <nav>
            <NavBar>
            </NavBar>
        </nav>
        <Outlet/>
        </>

    );
}

export default Layout;
