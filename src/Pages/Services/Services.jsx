import React from 'react';
import S_Banner from './S_Banner';
import Professionals from './Professionals';
import Our_services from './Our_services';
import Health_Tips from './Health_Tips';

const Services = () => {
    return (
        <div>
            <S_Banner></S_Banner>
            <Professionals></Professionals>
          <Our_services></Our_services>
          <Health_Tips></Health_Tips>
        </div>
    );
};

export default Services;