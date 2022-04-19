import React from 'react';

import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import HardwareSummary from '../../components/HardwareSummary/HardwareSummary.component';

function HardwarePage() {
  return (
    <div className='page-container'>
      <Header />
      <HardwareSummary />
      <Footer />
    </div>
  );
}
export default HardwarePage;
