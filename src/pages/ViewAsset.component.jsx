import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ViewAsset() {
  const [urlParams, setUrlParams] = useState(
    window.location.pathname.split('/')[1]
  );
  useEffect(() => {
    axios
      .get(otherURL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='viewasset-container'>
      <h1>Asset is: {urlParams}</h1>
      <button onClick={() => setUrlParams(urlParams + 'a')}>
        Error button
      </button>
    </div>
  );
}
export default ViewAsset;
