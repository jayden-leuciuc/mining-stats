import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import Asset from './pages/Asset/Asset.component';
import StockHighChart from './components/StockHighChart/StockHighChart.component';
import PoolsPage from './pages/PoolsPage/PoolsPage.component';
import HardwarePage from './pages/Hardware/HardwarePage.component';
import ViewHardware from './components/ViewHardware/ViewHardware.component';
import './App.css';
import { InfoProvider } from './context/CallsContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <InfoProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<HomePage />} className='routes' />
            <Route path='/pools' element={<PoolsPage />} />
            <Route path='/view/:id' element={<Asset />} />
            <Route path='/hardware' element={<HardwarePage />} />
            <Route path='/hardware/:id' element={<ViewHardware />} />
          </Routes>
        </BrowserRouter>
      </InfoProvider>
    </ThemeProvider>
  );
}

export default App;
