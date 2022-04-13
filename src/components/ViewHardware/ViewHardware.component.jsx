import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BsTypeH1 } from 'react-icons/bs';

const apiURL = 'https://api.minerstat.com/v2/hardware';

const ViewHardware = () => {
  const [hardwareData, setHardwareData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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
        console.log(response.data.filter((name) => name.url == id)[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};

export default ViewHardware;
