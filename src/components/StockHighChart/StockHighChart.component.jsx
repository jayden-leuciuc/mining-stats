import React from 'react';

//Import HighCharts
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import Indicators from 'highcharts/indicators/indicators-all.js';
import DragPanes from 'highcharts/modules/drag-panes.js';
import AnnotationsAdvanced from 'highcharts/modules/annotations-advanced.js';
import PriceIndicator from 'highcharts/modules/price-indicator.js';
import FullScreen from 'highcharts/modules/full-screen.js';
import StockTools from 'highcharts/modules/stock-tools.js';

import moment from 'moment';

import './StockHighChart.styles.css';
import priceData from './api_res.json';

// init the module
Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);

const options = { style: 'currency', currency: 'USD' };
const numberFormat = new Intl.NumberFormat('en-US', options);

const configPrice = {
  yAxis: [
    {
      offset: 20,

      labels: {
        formatter: function () {
          return numberFormat.format(this.value);
        },
        x: -15,
        style: {
          color: '#000',
          position: 'absolute',
        },
        align: 'left',
      },
    },
  ],
  tooltip: {
    shared: true,
    formatter: function () {
      return (
        numberFormat.format(this.y, 0) +
        '</b><br/>' +
        moment(this.x).format('MMMM Do YYYY, h:mm')
      );
    },
  },
  plotOptions: {
    series: {
      showInNavigator: true,
      gapSize: 6,
    },
  },
  rangeSelector: {
    selected: 1,
  },
  title: {
    text: `Bitcoin stock price`,
  },
  chart: {
    height: 600,
  },

  credits: {
    enabled: false,
  },

  legend: {
    enabled: true,
  },
  xAxis: {
    type: 'date',
  },
  rangeSelector: {
    buttons: [
      {
        type: 'day',
        count: 1,
        text: '1d',
      },
      {
        type: 'day',
        count: 7,
        text: '7d',
      },
      {
        type: 'month',
        count: 1,
        text: '1m',
      },
      {
        type: 'month',
        count: 3,
        text: '3m',
      },
      {
        type: 'all',
        text: 'All',
      },
    ],
    selected: 4,
  },
  //Generate chart
  series: [
    {
      name: 'Price',
      type: 'spline',
      data: priceData.prices,
      tooltip: {
        valueDecimals: 2,
      },
    },
  ],
};

const StockHighChart = () => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={configPrice}
    />
  </div>
);

export default StockHighChart;
