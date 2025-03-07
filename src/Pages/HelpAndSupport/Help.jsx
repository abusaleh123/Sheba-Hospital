import React from 'react';
import Help_Banner from './Help_Banner';
import Feel_Free from '../Contact/Feel_Free';
import Other_Services from './Other_Services';

const Help = () => {
    return (
        <div>
            <Help_Banner></Help_Banner>
            <p className="pt-20"><Feel_Free></Feel_Free></p>
            <Other_Services></Other_Services>
        </div>
    );
};

export default Help;