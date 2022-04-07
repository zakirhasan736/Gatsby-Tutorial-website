import React from 'react';
import InViewMonitor from 'react-inview-monitor'

// import { images } from '../../constants';

const sectionDescription = ({ secDescription }) => (
    <InViewMonitor
    classNameNotInView='vis-hidden'
    classNameInView='slideDrwUp'  >
    <p className="AppSection__Desc">{secDescription}</p>
    </InViewMonitor>
);

export default sectionDescription;