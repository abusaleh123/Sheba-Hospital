import React from 'react';
import Emer_Banner from './Emer_Banner';
import Any_Emergency from './Any_Emergency';
import Appointment from './Appointment';
import Treatment from './Treatment';
import Trusted from './Trusted';

const Emergency = () => {
    return (
        <div>
            <Emer_Banner></Emer_Banner>
            <Any_Emergency></Any_Emergency>
            <Appointment></Appointment>
            <Treatment></Treatment>
            <Trusted></Trusted>
        </div>
    );
};

export default Emergency;