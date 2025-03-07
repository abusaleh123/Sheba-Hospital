import React from 'react';
import Contact_Banner from './Contact_Banner';
import GetIn_Touch from './GetIn_Touch';
import Feel_Free from './Feel_Free';
import Map from '../../HomePage/Maps/Map';

const ContactUs = () => {
    return (
        <div>
            <Contact_Banner></Contact_Banner>
            <GetIn_Touch></GetIn_Touch>
            <Feel_Free></Feel_Free>
            <Map></Map>
        </div>
    );
};

export default ContactUs;