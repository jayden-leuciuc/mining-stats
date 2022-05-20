import React from 'react';
import { Link } from 'react-router-dom';
import './ExchangeCard.styles.scss';

function ExchangeCard() {
  return (
    <div className='exchangecard-container'>
      <h1>Exchange here</h1>
      <p>Convert between coins and fiat</p>
      <Link to='/exchange' className='exchange-link'>
        Exchange
      </Link>
    </div>
  );
}
export default ExchangeCard;
