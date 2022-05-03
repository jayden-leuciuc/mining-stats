import React from 'react';
import { Link } from 'react-router-dom';

import './InputSuccess.styles.scss';

const InputSuccess = () => {
  return (
    <div className='inputsuccess-container'>
      <h1>Thank you for your feedback</h1>
      <h2>We will get back to you as soon as possible</h2>
      <Link to='/' className='inputsuccess-button'>
        Take me home
      </Link>
    </div>
  );
};

export default InputSuccess;
