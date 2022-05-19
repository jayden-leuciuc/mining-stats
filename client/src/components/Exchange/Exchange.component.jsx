import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { vs_currencies } from './ExchangeData';
import { coinList } from './CoinListData';

import './Exchange.styles.scss';

const Exchange = () => {
  const [base, setBase] = useState('bitcoin');
  const [target, setTarget] = useState('usd');
  const [value, setValue] = useState(0);
  const [filteredVS, setFilteredVS] = useState(vs_currencies);
  const [filteredCL, setFilteredCL] = useState(coinList);

  const handleBaseChange = (e) => {
    setBase(e.target.value);
    console.log(`base is ${base}`);
  };

  const handleTargetChange = (e) => {
    setTarget(e.target.value);
    console.log(`target is ${target}`);
  };

  const handleVSSearchChange = (e) => {
    console.log(e.target.value);
    const filtered = vs_currencies.filter((item) =>
      item.includes(e.target.value.toLowerCase())
    );
    setFilteredVS(filtered.slice(0, 10));
  };

  const handleCLSearchChange = (e) => {
    console.log(e.target.value);
    const filtered = coinList.filter((item) => {
      item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredCL(filtered.slice(0, 25));
  };

  function exchange() {
    axios
      .get(`/api/exchange?base=${base}&target=${target}`)
      .then((res) => {
        Object.keys(res.data).map((key, i) => {
          Object.values(res.data[key]).map((value, i) => {
            setValue(value);
            console.log(value);
          });
        });
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className='exchange-container'>
      <div className='exchange-flex'>
        <div className='cl-container'>
          <input
            type='search'
            placeholder='Search Base'
            onChange={handleCLSearchChange}
          />
          <select onChange={handleBaseChange}>
            {filteredCL.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
        </div>

        <div className='vs-container'>
          <input
            type='search'
            placeholder='Search Target'
            onChange={handleVSSearchChange}
          />
          <select name='Target' onChange={handleTargetChange}>
            {filteredVS.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
      </div>
      <h1>Value is: {value}</h1>
      <h1>Base is: {base}</h1>
      <h1>Target is: {target}</h1>
      <button onClick={exchange}>Convert</button>
    </div>
  );
};

export default Exchange;
