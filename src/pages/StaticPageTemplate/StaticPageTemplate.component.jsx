import React from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';

const StaticPageTemplate = ({ componentToPassDown }) => {
  return (
    <div className='page-container'>
      <Header />
      {componentToPassDown}
      <Footer />
    </div>
  );
};

export default StaticPageTemplate;
