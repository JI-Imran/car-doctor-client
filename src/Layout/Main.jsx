import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Sheared/Footer/Footer';
import NavBar from '../pages/Sheared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;