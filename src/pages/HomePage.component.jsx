import React from 'react';
import MarketDataTable from '../components/MarketDataTable/MarketDataTable.component';
import Footer from '../components/Footer/Footer.component';
import './HomePage.styles.scss';

function HomePage() {
  return (
    <>
      <div className='homepage'>
        <MarketDataTable />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
