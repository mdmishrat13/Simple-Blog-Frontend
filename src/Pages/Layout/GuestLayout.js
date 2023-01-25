import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Componants/Footer';
import PublicNavbar from './../../Componants/Navbar/PublicNavbar'

const GuestLayout = () => {
    return (
        <>
            <PublicNavbar/>
                <Outlet/>
            <Footer/>
        </>
    );
};

export default GuestLayout;