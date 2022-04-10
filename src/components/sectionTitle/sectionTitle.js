import React from 'react';
import InViewMonitor from 'react-inview-monitor'


const sectionTitle = ({ title }) => (
    <InViewMonitor
    classNameNotInView='vis-hidden'
    classNameInView='slideDrwUp'  >
    <h2 className="AppSection__Title">{title}</h2>
    </InViewMonitor>
);

export default sectionTitle;