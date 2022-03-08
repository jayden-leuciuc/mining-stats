import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shortNumber from 'short-number';
import './MarketDataTable.styles.scss';

const baseURL = 'https://api.coingecko.com/api/v3/ping';
const otherURL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

function MarketDataTable() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(otherURL)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='marketdata-container'>
      <h1>Top Coins</h1>
      <table class='marketdata-table'>
        <thead>
          <tr>
            <th>Market</th>
            <th>Cap</th>
            <th>Logo</th>
            <th>ID</th>
            <th>Symbol</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((coin) => {
            return (
              <>
                <tr>
                  <td>{coin.market_cap_rank}</td>
                  <td>{shortNumber(coin.market_cap)}</td>
                  <td>
                    <img src={coin.image} alt='#' className='coin-image'></img>
                  </td>

                  <td>{coin.id}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.name}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default MarketDataTable;
