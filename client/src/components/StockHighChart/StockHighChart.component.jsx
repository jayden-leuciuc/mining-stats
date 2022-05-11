import React, { useState, useEffect } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock.src';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StockHighChart.styles.css';

const StockHighChart = () => {
  const { id } = useParams();
  const [assetData, setAssetData] = useState([]);
  const configPrice = {
    colors: ['#f7931a', '#ff6347'],
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: id,
      style: {
        color: '#CFCFCF',
      },
    },

    chart: {
      backgroundColor: {
        color: '#f7931a',
      },
      style: {
        fontFamily: 'sans-serif',
      },
    },
    credits: {
      text: 'Data provided by CoinGecko',
      href: 'https://www.coingecko.com/en/api',
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
        color: '#CFCFCF',
        tooltip: {
          valueDecimals: 0,
        },
        yAxis: 1,
      },
    ],
  };

  useEffect(() => {
    axios
      .get(`/api/coin/${id}`)
      .then((res) => {
        setAssetData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class='reacthighcharts2'>
      <ReactHighcharts config={configPrice} />
    </div>
  );
};
export default StockHighChart;
