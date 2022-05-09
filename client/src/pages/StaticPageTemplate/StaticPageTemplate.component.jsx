import React from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import FlexBoxContainer from '../../components/FlexBoxContainer/FlexBoxContainer.component';

import './StaticPageTemplate.styles.scss';

const StaticPageTemplate = ({ componentToPassDown }) => {
  return (
    <div className='page-container'>
      <Header />
      <FlexBoxContainer>{componentToPassDown}</FlexBoxContainer>
      <Footer />
    </div>
  );
};

export default StaticPageTemplate;
