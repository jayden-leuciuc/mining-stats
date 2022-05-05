import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import shortNumber from 'short-number';
import './MarketDataTable.styles.scss';
import { InfoContext } from '../../context/CallsContext';

const baseURL = 'https://api.coingecko.com/api/v3/ping';
const otherURL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

function MarketDataTable() {
  const [apiData, setApiData] = useState([]);
  const { info, setInfo } = useContext(InfoContext);
  useEffect(() => {
    axios
      .get(otherURL)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setInfo({ calls: info.calls + 1 });
  }, []);

  return (
    <div className='marketdata-container'>
      <h1>The Market by a Glance</h1>
      <table className='marketdata-table' align='center'>
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
                <tr
                  onClick={() => (window.location = `/view/${coin.id}`)}
                  className='market-row'
                >
                  <td>{coin.market_cap_rank}</td>
                  <td className='img-td'>
                    <img src={coin.image} alt='#' className='coin-image'></img>
                    <p>{coin.name}</p>
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