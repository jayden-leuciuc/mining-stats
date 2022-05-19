import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exchange = () => {
  const [base, setBase] = useState('bitcoin');
  const [target, setTarget] = useState('usd');
  const [value, setValue] = useState(0);

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
    <div>
      <h1>Value is: {value}</h1>
      <button onClick={exchange}>Set Exchange</button>
    </div>
  );
};

export default Exchange;
