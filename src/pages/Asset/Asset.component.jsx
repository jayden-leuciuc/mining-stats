import React from 'react';
import './Asset.styles.scss';
import StockHighChart from '../../components/StockHighChart/StockHighChart.component';
import NewsFeed from '../../components/NewsFeed/NewsFeed.component';
import Header from '../../components/Header/Header.component';
function Asset() {
  return (
    <div className='assetpage-container'>
      <Header />
      <StockHighChart />
      <NewsFeed />
    </div>
  );
}

export default Asset;
