import React from 'react';
import MarketDataTable from '../../components/MarketDataTable/MarketDataTable.component';
import Footer from '../../components/Footer/Footer.component';
import Header from '../../components/Header/Header.component';
import './HomePage.styles.scss';
function HomePage() {
  return (
    <div className='page-container'>
      <Header />
      <MarketDataTable />
      <Footer />
    </div>
  );
}

export default HomePage;
