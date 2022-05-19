import React, { useState, useEffect } from 'react';

import './MiningCoins.styles.scss';
import axios from 'axios';

const MiningCoins = () => {
  const [mineableCoinData, setMineableCoinData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/mineableCoin')
      .then((response) => {
        setMineableCoinData(response.data.coins);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='miningcoins-container'>
      <h1>Mineable Coins</h1>
      <div className='miningcoin-container'>
        {Object.keys(mineableCoinData).map((key, i) => (
          <div
            key={key}
            className='miningcard-container'
            onClick={() =>
              (window.location = `/calculator/coin/${mineableCoinData[key].id}`)
            }
          >
            <h3 key={key}>{key}</h3>
            <p>{mineableCoinData[key].algorithm}</p>
            <div className='miningcardtag-container'>
              <p className={mineableCoinData[key].lagging ? 'show' : 'hide'}>
                {' '}
                Lagging{' '}
              </p>
              <p className={mineableCoinData[key].listed ? 'show' : 'hide'}>
                {' '}
                Listed{' '}
              </p>
              <p className={mineableCoinData[key].testing ? 'show' : 'hide'}>
                {' '}
                Testing{' '}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MiningCoins;
