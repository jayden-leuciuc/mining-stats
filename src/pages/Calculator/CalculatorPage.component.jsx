import React from 'react';

import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Calculator from '../../components/Calculator/Calculator.component';

function CalculatorPage() {
  return (
    <div className='page-container'>
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default CalculatorPage;
