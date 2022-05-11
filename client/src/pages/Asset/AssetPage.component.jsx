import React from 'react';
import './Asset.styles.scss';
import {
  StockHighChart,
  NewsFeed,
  CoinSummary,
} from '../../components/componentExport';

function AssetPage() {
  return (
    <>
      <div className='assetpage-info-container'>
        <StockHighChart className='stockhighchart1' />
        <CoinSummary />
      </div>

      <NewsFeed />
    </>
  );
}

export default AssetPage;
