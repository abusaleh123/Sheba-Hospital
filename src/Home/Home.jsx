import React from 'react';
import Navbar from '../HomePage/Header/Navbar';
import Banner from '../HomePage/Header/Banner';
import OurServices from '../HomePage/Services/OurServices';
import AboutUs from '../HomePage/AboutUs/AboutUs';
import Looking_Doctors from '../HomePage/Doctors/Looking_Doctors';
import Footer from '../Components/Footer';
import Map from '../HomePage/Maps/Map';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
            <Looking_Doctors></Looking_Doctors>
         <Map></Map>
         <Footer></Footer>
        </div>
    );
};

export default Home;