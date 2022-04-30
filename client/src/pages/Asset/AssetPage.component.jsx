import React from 'react';
import './Asset.styles.scss';
import {
  StockHighChart,
  NewsFeed,
  Header,
  CoinSummary,
  Footer,
} from '../../components/componentExport';

function AssetPage() {
  return (
    <div>
      <div className='assetpage-info-container'>
        <StockHighChart className='stockhighchart1' />
        <CoinSummary />
      </div>

      <NewsFeed />
    </div>
  );
}

export default AssetPage;
