import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HardwareSpecs from '../HardwareSpecs/HardwareSpecs.component';

import './ViewHardware.styles.scss';
const apiURL = 'https://api.minerstat.com/v2/hardware';

const ViewHardware = () => {
  const [hardwareData, setHardwareData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [nvidiaCards, setNvidiaCards] = useState([]);
  const [amdCards, setAmdCards] = useState([]);
  const { id } = useParams();

  //function filterHardware(hardwareData) {
  //  hardwareData
  //
  //.map((filteredHardware) => console.log(filteredHardware.algorithms));
  // }

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        console.log(response.data.filter((name) => name.url == id)[0].specs);
        setFilteredData(response.data.filter((name) => name.url == id)[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='viewhardware-container'>
      {filteredData.name}
      <HardwareSpecs></HardwareSpecs>
    </div>
  );
};

export default ViewHardware;
