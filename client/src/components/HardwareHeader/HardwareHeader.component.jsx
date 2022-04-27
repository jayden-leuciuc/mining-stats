import React from 'react';

import './HardwareHeader.styles.scss';

const HardwareHeader = ({ title }) => {
  return (
    <div className='hardwareheader-container'>
      <h1>{title}</h1>
      <img src='#' alt='Hardware' />
    </div>
  );
};
export default HardwareHeader;
