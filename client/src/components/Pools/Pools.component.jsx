import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Pools.styles.scss';

const Pools = () => {
  const [poolData, setPoolData] = useState([]);
  const [numShownPools, setNumShownPools] = useState(15);
  const [numPools, setNumPools] = useState(0);
  const [urlParams, setUrlParams] = useState('');

  function loadMore(x) {
    setNumShownPools(numShownPools + x);
  }
  function filterButton(urlParam) {
    setNumShownPools(15);
    setUrlParams(urlParam);
  }
  function filterPool(urlParam) {
    axios
      .get(`/api/pools/${urlParam}`)
      .then((response) => {
        setNumPools(response.data.length);
        setPoolData(response.data.slice(0, numShownPools));
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    axios
      .get(`/api/pools/`)
      .then((response) => {
        setNumPools(response.data.length);
        setPoolData(response.data.slice(0, numShownPools));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='pools-container'>
      <div className='button-container'>
        Sort by:
        <button onClick={() => filterPool(``)}>All</button>
        <button onClick={() => filterPool(`type=multipool`)}>Multipool</button>
        <button onClick={() => filterPool(`coin=ETH`)}>ETH Pools</button>
        <button onClick={() => filterPool(`coin=ETC`)}>ETC Pools</button>
      </div>
      <table className='pools-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Founded</th>
            <th>Website</th>
            <th>Supported Coins</th>
          </tr>
        </thead>
        <tbody>
          {poolData.map((key, i) => (
            <tr>
              <td key={poolData[i].id}>{poolData[i].name}</td>
              <td>{poolData[i].founded !== 0 ? poolData[i].founded : '-'}</td>
              <td>
                {poolData[i].website ? (
                  <a href={poolData[i].website}>{poolData[i].website}</a>
                ) : (
                  '-'
                )}
              </td>

              {poolData[i].coins ? (
                <td>
                  {Object.keys(poolData[i].coins).map((key, i) => (
                    <>
                      <span>{key} </span>
                    </>
                  ))}
                </td>
              ) : (
                <td>-</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {numPools - numShownPools > 15 ? (
        <button onClick={() => loadMore(15)} className='loadmore-button'>
          Load more ({numPools - numShownPools})
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Pools;
