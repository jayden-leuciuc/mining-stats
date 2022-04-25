import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './HardwareSpecs.styles.scss';
const apiURL = 'https://api.minerstat.com/v2/hardware';
function HardwareSpecs() {
  const [hardwareData, setHardwareData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        console.log(response.data.filter((name) => name.url == id)[0]);
        setHardwareData(response.data.filter((name) => name.url == id)[0]);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='gpuspecs-container'>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {hardwareData.type === 'asic' ? (
            <>
              <p>{hardwareData.specs[`Chip type`]}</p>
              <p>Noise level: {hardwareData.specs[`Noise level`]}</p>
              <p>Number of Chips: {hardwareData.specs[`Number of chips`]}</p>
              <p>Release Date: {hardwareData.specs[`Release date`]}</p>
            </>
          ) : (
            <>
              <p>
                Max Memory Bandwidth:{' '}
                {hardwareData.specs[`Max Memory Bandwidth`]}
              </p>
              <p>Max Memory Size: {hardwareData.specs[`Max Memory Size`]}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default HardwareSpecs;
