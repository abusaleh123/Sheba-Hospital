import React from 'react';
import Navbar from '../HomePage/Header/Navbar';
import Banner from '../HomePage/Header/Banner';
import OurServices from '../HomePage/Services/OurServices';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;