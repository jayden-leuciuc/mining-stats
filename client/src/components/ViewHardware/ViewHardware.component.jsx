import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HardwareSpecs from '../HardwareSpecs/HardwareSpecs.component';
import AlgoTable from '../AlgoTable/AlgoTable.component';
import HardwareHeader from '../HardwareHeader/HardwareHeader.component';

import './ViewHardware.styles.scss';
const apiURL = 'https://api.minerstat.com/v2/hardware';

const ViewHardware = () => {
  const [specData, setSpecData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [algoData, setAlgoData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setSpecData(response.data.filter((name) => name.url === id)[0].specs);
        setFilteredData(response.data.filter((name) => name.url === id)[0]);
        setAlgoData(
          response.data.filter((name) => name.url === id)[0].algorithms
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='viewhardware-container'>
      <div className='hardware-left-container'>
        <HardwareHeader title={filteredData.name} />
        <AlgoTable algoData={algoData} />
      </div>

      <HardwareSpecs specData={specData} />
    </div>
  );
};

export default ViewHardware;
