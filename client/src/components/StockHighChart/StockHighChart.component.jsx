import React, { useState, useEffect, useContext } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock.src';
import moment from 'moment';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import shortNumber from 'short-number';
import { InfoContext } from '../../context/CallsContext';

const StockHighChart = () => {
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  const { info, setInfo } = useContext(InfoContext);
  const { id } = useParams();
  const [assetData, setAssetData] = useState([]);
  const configPrice = {
    colors: ['#f7931a', '#000'],
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: id,
    },

    chart: {
      backgroundColor: {
        color: '#f7931a',
      },
      style: {
        fontFamily: 'sans-serif',
      },
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
        style: {
          color: '#000',
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
        // handle error
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ReactHighcharts config={configPrice} />
    </div>
  );
};
export default StockHighChart;
