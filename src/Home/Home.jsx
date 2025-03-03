import React from 'react';
import Navbar from '../HomePage/Header/Navbar';
import Banner from '../HomePage/Header/Banner';
import OurServices from '../HomePage/Services/OurServices';
import AboutUs from '../HomePage/AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;