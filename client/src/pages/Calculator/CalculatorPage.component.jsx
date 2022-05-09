import React from 'react';
import './Calculator.styles.scss';
import { MiningCoins, ExchangeCard } from '../../components/componentExport';

function Calculator() {
  return (
    <div className='calculator-container'>
      <MiningCoins />
      <ExchangeCard />
    </div>
  );
}

export default Calculator;
