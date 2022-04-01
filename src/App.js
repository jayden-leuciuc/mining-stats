import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import Asset from './pages/Asset/Asset.component';
import StockHighChart from './components/StockHighChart/StockHighChart.component';
import './App.css';
import { InfoProvider } from './components/CallsContext';

function App() {
  return (
    <InfoProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} className='routes' />
          <Route path='/:id' element={<Asset />} />
        </Routes>
      </BrowserRouter>
    </InfoProvider>
  );
}

export default App;
