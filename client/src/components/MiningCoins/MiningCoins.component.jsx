import React from 'react';

import './MiningCoins.styles.scss';

import data from './calculators.json';

const MiningCoins = () => {
  console.log(Object.keys(data.coins));
  const filtered = data.coins;
  return (
    <div className='miningcoins-container'>
      <h1>Mineable Coins</h1>
      <div className='miningcoin-container'>
        {Object.keys(filtered).map((key, i) => (
          <div
            className='miningcard-container'
            onClick={() =>
              (window.location = `/calculator/coin/${filtered[key].id}`)
            }
          >
            <h3 key={key}>{key}</h3>
            <p>{filtered[key].algorithm}</p>
            <div className='miningcardtag-container'>
              <p className={filtered[key].lagging ? 'show' : 'hide'}>
                {' '}
                Lagging{' '}
              </p>
              <p className={filtered[key].listed ? 'show' : 'hide'}> Listed </p>
              <p className={filtered[key].testing ? 'show' : 'hide'}>
                {' '}
                Testing{' '}
              </p>
            </div>
            {console.log(filtered[key])}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MiningCoins;
