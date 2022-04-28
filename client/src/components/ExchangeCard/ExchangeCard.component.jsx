import React from 'react';
import { Link } from 'react-router-dom';
import './ExchangeCard.styles.scss';

function ExchangeCard() {
  return (
    <div className='exchangecard-container'>
      <h1>Exchange here</h1>
      <p>Convert between coins and USD</p>
      <Link to='/exchange'>Exchange</Link>
    </div>
  );
}
export default ExchangeCard;
