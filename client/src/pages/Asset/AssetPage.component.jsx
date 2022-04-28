import React from 'react';
import './Asset.styles.scss';
import StockHighChart from '../../components/StockHighChart/StockHighChart.component';
import NewsFeed from '../../components/NewsFeed/NewsFeed.component';
import Header from '../../components/Header/Header.component';
import CoinSummary from '../../components/CoinSummary/CoinSummary.component';
import Footer from '../../components/Footer/Footer.component';
function Asset() {
  return (
    <div className='page-container'>
      <Header />
      <div className='assetpage-info-container'>
        <StockHighChart className='stockhighchart1' />
        <CoinSummary />
      </div>

      <NewsFeed />
      <Footer />
    </div>
  );
}

export default Asset;
