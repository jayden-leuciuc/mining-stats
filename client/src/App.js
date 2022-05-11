import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import Calculator from './pages/Calculator/CalculatorPage.component';
import Exchange from './pages/Exchange/ExchangePage.component';
import HardwareCalculator from './pages/HardwareCalculator/HardwareCalculatorPage.component';
import * as Component from './components/componentExport';
import AssetPage from './pages/Asset/AssetPage.component';
import StaticPageTemplate from './pages/StaticPageTemplate/StaticPageTemplate.component';

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
          <Route exact path='/' element={<HomePage />} />
          <Route
            path='/pools'
            element={
              <StaticPageTemplate componentToPassDown={<Component.Pools />} />
            }
          />
          <Route
            path='/about'
            element={
              <StaticPageTemplate componentToPassDown={<Component.About />} />
            }
          />
          <Route
            path='/exchange'
            element={<StaticPageTemplate componentToPassDown={<Exchange />} />}
          />
          <Route
            path='/faq'
            element={
              <StaticPageTemplate componentToPassDown={<Component.FAQ />} />
            }
          />
          <Route
            path='/privacy'
            element={
              <StaticPageTemplate
                componentToPassDown={<Component.PrivacyPolicy />}
              />
            }
          />
          <Route
            path='/contact'
            element={
              <StaticPageTemplate componentToPassDown={<Component.Contact />} />
            }
          />
          <Route
            path='/contact/success'
            element={
              <StaticPageTemplate
                componentToPassDown={<Component.InputSuccess />}
              />
            }
          />
          <Route
            path='/terms'
            element={
              <StaticPageTemplate
                componentToPassDown={<Component.TermsOfService />}
              />
            }
          />
          <Route
            path='/view/:id'
            element={<StaticPageTemplate componentToPassDown={<AssetPage />} />}
          />
          <Route
            path='/hardware'
            element={
              <StaticPageTemplate
                componentToPassDown={<Component.HardwareSummary />}
              />
            }
          />
          <Route
            path='/hardware/:id'
            element={
              <StaticPageTemplate
                componentToPassDown={<Component.ViewHardware />}
              />
            }
          />
          <Route
            path='/calculator'
            element={
              <StaticPageTemplate componentToPassDown={<Calculator />} />
            }
          />
          <Route
            path='/calculator/coin/:id'
            element={
              <StaticPageTemplate
                componentToPassDown={<HardwareCalculator />}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;
