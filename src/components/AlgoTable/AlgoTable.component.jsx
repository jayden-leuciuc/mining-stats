import React from 'react';

import './AlgoTable.styles.scss';
import { shortHash, electricCalculator } from '../utils';

const AlgoTable = ({ algoData }) => {
  return (
    <div className='algotable-container'>
      <table className='algotable-table'>
        <thead>
          <tr>
            <th>Algorithms ({Object.keys(algoData).length})</th>
            <th>Hashrate</th>
            <th>Power (Watts)</th>
            <th>Power Cost (Daily)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(algoData).map((key, i) => (
            <tr>
              <td key={i}>{key}</td>
              <td>{shortHash(algoData[key].speed)}</td>
              <td>{algoData[key].power}</td>
              <td>-{electricCalculator(24, 0.1, algoData[key].power)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AlgoTable;
