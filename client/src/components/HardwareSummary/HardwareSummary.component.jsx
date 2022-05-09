import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HardwareSummary.styles.scss';
import lightAsic from '../images/light_asic.png';
import darkAsic from '../images/dark_asic.png';
import darkGpu from '../images/dark_gpu.png';
import lightGpu from '../images/light_gpu.png';

const apiURL = 'https://api.minerstat.com/v2/hardware';
function HardwareSummary() {
  const [hardwareData, setHardwareData] = useState([]);
  let [dynamicData, setDynamicData] = useState([]);
  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setHardwareData(response.data);
        setDynamicData(response.data);
        console.log('UseEffect Called');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function filterArray(givenData) {
    setDynamicData(hardwareData);
    switch (givenData) {
      case 'asic':
        console.log('Asic was called');
        setDynamicData(hardwareData.filter((bb) => bb.type === 'asic'));
        break;
      case 'Nvidia':
        console.log('Nvidia was called');
        setDynamicData(hardwareData.filter((name) => name.brand === 'Nvidia'));
        break;
      case 'AMD':
        console.log('AMD was called');
        setDynamicData(hardwareData.filter((name) => name.brand === 'AMD'));
        break;
      default:
        console.log('Error');
        break;
    }
  }
  return (
    <>
      <div className='button-container'>
        <h1>Top Hardware</h1>
        <button onClick={() => filterArray('Nvidia')}>Nvidia</button>
        <button onClick={() => filterArray('AMD')}>Amd</button>
        <button onClick={() => filterArray('asic')}>Asic</button>
      </div>
      <div className='hardwaresummary-container'>
        {dynamicData.map((hardware) => {
          return (
            <div
              className='hardwarecard-container'
              onClick={() => (window.location = `/hardware/${hardware.url}`)}
              key={hardware.id}
            >
              {hardware.type === 'gpu' ? (
                localStorage.getItem('theme') === 'theme-dark' ? (
                  <img
                    src={lightGpu}
                    alt='Light GPU Icon'
                    className='gpu-image'
                  ></img>
                ) : (
                  <img
                    src={darkGpu}
                    alt='Dark GPU Icon'
                    className='gpu-image'
                  ></img>
                )
              ) : localStorage.getItem('theme') === 'theme-dark' ? (
                <img
                  src={lightAsic}
                  alt='Light Asic Icon'
                  className='gpu-image'
                ></img>
              ) : (
                <img
                  src={darkAsic}
                  alt='Dark Asic Icon'
                  className='gpu-image'
                ></img>
              )}
              <p>{hardware.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HardwareSummary;
