import React, { useState, useEffect } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock.src';
import moment from 'moment';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import shortNumber from 'short-number';

const StockHighChart = () => {
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  const { id } = useParams();
  const [assetData, setAssetData] = useState([]);
  const configPrice = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: id,
    },

    yAxis: [
      {
        labels: {
          align: 'right',
          x: -5,
        },

        height: '60%',
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: 'right',
          x: -3,
        },
        title: {
          text: 'Volume',
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2,
      },
    ],

    tooltip: {
      split: true,
    },

    series: [
      {
        name: `Price`,
        data: assetData.prices,
        tooltip: {
          valueDecimals: 2,
        },
      },
      {
        type: 'column',
        name: 'Volume',
        data: assetData.total_volumes,
        yAxis: 1,
      },
    ],
  };

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=max`
      )
      .then((res) => {
        setAssetData(res.data);
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ReactHighcharts config={configPrice}></ReactHighcharts>
    </div>
  );
};
export default StockHighChart;
