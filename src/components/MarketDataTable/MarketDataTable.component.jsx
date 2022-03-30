import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shortNumber from 'short-number';
import './MarketDataTable.styles.scss';

const baseURL = 'https://api.coingecko.com/api/v3/ping';
const otherURL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

function MarketDataTable() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(otherURL)
      .then((response) => {
        console.log(response.data);
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
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
            <th>7d Performance</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((coin) => {
            return (
              <>
                <tr onClick={() => (window.location = `/${coin.id}`)}>
                  <td>{coin.market_cap_rank}</td>
                  <td>
                    <img src={coin.image} alt='#' className='coin-image'></img>
                    {coin.name}
                    {coin.symbol}
                  </td>
                  <td>$ {coin.current_price}</td>

                  <td
                    className={
                      coin.price_change_percentage_24h > 0
                        ? 'positive'
                        : 'negative'
                    }
                  >
                    {coin.price_change_percentage_24h}
                  </td>
                  <td>{shortNumber(coin.market_cap)}</td>
                  <td>
                    <img
                      src={`https://www.coingecko.com/coins/${coin.market_cap_rank}/sparkline`}
                      alt='#'
                    />
                  </td>
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
