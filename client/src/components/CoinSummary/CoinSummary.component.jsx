import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoinSummary.styles.scss';
import { shortHash } from '../utils';
function CoinSummary() {
  const [coinInfo, setCoinInfo] = useState({});
  useEffect(() => {
    axios
      .get('https://api.minerstat.com/v2/coins?list=BTC')
      .then((response) => {
        setCoinInfo(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className='coinsummary-container'>
      <div className='coinsummary-header'>
        <p>
          <h3>MiningStats</h3>
          {coinInfo.coin} - {coinInfo.algorithm}
        </p>
      </div>
      <div className='coinsummary-snippet-container'>
        <div className='coinsummary-snippet'>
          <p>Total Hashrate</p>
          <p>{shortHash(coinInfo.network_hashrate)}</p>
        </div>
        <div className='coinsummary-snippet'>
          <p>Difficulty</p>
          <p>{shortHash(coinInfo.difficulty)}</p>
        </div>
        <div className='coinsummary-snippet'>
          <p>Block Reward</p>
          <p>
            {parseFloat(coinInfo.reward_block).toFixed(2)}{' '}
            {coinInfo.reward_unit}
          </p>
        </div>
      </div>
    </div>
  );
}
export default CoinSummary;
