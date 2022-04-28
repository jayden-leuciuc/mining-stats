import React from 'react';

import staticData from './290.json';
import { shortHash } from '../../components/utils';
import { useParams } from 'react-router-dom';

const HardwareCalculator = () => {
  const { id } = useParams();
  console.log(staticData);
  return (
    <div className='hardwarecalculatorpage-container'>
      <h1>HardwareCalculator Page - Id: {id}</h1>
      <p>{staticData.name}</p>
      <p>{staticData.algorithm} Algorithm</p>
      <p>Block time: {staticData.block_time}s</p>
      <p>Difficulty: {staticData.difficulty}</p>
      <p>Difficulty (3d): {staticData.difficulty3}</p>
      <p>Network Hashrate: {shortHash(staticData.nethash)}</p>
      <p>Market Cap: {staticData.market_cap}</p>
    </div>
  );
};
export default HardwareCalculator;
