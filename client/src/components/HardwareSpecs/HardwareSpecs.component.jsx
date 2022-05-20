import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './HardwareSpecs.styles.scss';
function HardwareSpecs({ specData }) {
  const [hardwareData, setHardwareData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/api/hardware')
      .then((response) => {
        setHardwareData(response.data.filter((name) => name.url === id)[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='hardwarespecs-container'>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <h1>Specs</h1>
          {Object.keys(specData).map((key, i) => (
            <p key={key}>
              {key} : {specData[key]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
export default HardwareSpecs;
