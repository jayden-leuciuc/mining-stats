import React from 'react';

import './HardwareHeader.styles.scss';

const HardwareHeader = ({ title }) => {
  return (
    <div className='hardwareheader-container'>
      <h1>{title}</h1>
    </div>
  );
};
export default HardwareHeader;
