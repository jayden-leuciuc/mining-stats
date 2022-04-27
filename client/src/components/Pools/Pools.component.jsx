import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Pools.styles.scss';

const Pools = () => {
  const [poolData, setPoolData] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.minerstat.com/v2/pools')
      .then((response) => {
        console.log(response.data.slice(0, 10));
        setPoolData(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='pools-container'>
      <h1>Pools</h1>
      {poolData.map((x) => (
        <p>{x.name}</p>
      ))}
    </div>
  );
};

export default Pools;
