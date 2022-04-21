import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import Asset from './pages/Asset/Asset.component';
import StockHighChart from './components/StockHighChart/StockHighChart.component';
import PoolsPage from './pages/PoolsPage/PoolsPage.component';
import HardwarePage from './pages/Hardware/HardwarePage.component';
import ViewHardware from './components/ViewHardware/ViewHardware.component';
import CalculatorPage from './pages/Calculator/CalculatorPage.component';
import StaticPageTemplate from './pages/StaticPageTemplate/StaticPageTemplate.component';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.component';
import TermsOfService from './components/Terms/TermsOfService.component';
import About from './components/About/About.component';
import Contact from './components/Contact/Contact.component';
import FAQ from './components/FAQ/FAQ.component';
import './App.css';

import { InfoProvider } from './context/CallsContext';
import { keepTheme } from './components/themes';

function App() {
  useEffect(() => {
    keepTheme();
  }, []);
  return (
    <InfoProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} className='routes' />
          <Route path='/pools' element={<PoolsPage />} />
          <Route
            path='/about'
            element={<StaticPageTemplate componentToPassDown={<About />} />}
          />
          <Route
            path='/faq'
            element={<StaticPageTemplate componentToPassDown={<FAQ />} />}
          />
          <Route
            path='/privacy'
            element={
              <StaticPageTemplate componentToPassDown={<PrivacyPolicy />} />
            }
          />
          <Route
            path='/contact'
            element={<StaticPageTemplate componentToPassDown={<Contact />} />}
          />
          <Route
            path='/terms'
            element={
              <StaticPageTemplate componentToPassDown={<TermsOfService />} />
            }
          />
          <Route path='/view/:id' element={<Asset />} />
          <Route path='/hardware' element={<HardwarePage />} />
          <Route path='/hardware/:id' element={<ViewHardware />} />
          <Route path='/calculator' element={<CalculatorPage />} />
        </Routes>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;
