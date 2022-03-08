import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.component';
import Asset from './pages/Asset/Asset.component';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} className='routes' />
      {/* List all */}
      <Route path='/:id' element={<Asset />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
