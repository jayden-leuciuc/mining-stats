import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoinSummary.styles.scss';
import { shortHash } from '../utils';
import { useParams } from 'react-router-dom';
function CoinSummary() {
  const [coinInfo, setCoinInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/coinMineableInfo/${id}`)
      .then((response) => {
        setCoinInfo(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className='coinsummary-container'>
      <>
        {coinInfo ? (
          <>
            {' '}
            <div className='coinsummary-header'>
              <h3>
                {coinInfo.coin} - {coinInfo.algorithm}
              </h3>
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
          </>
        ) : (
          <p>No Mining Data available</p>
        )}
      </>
    </div>
  );
}
export default CoinSummary;
