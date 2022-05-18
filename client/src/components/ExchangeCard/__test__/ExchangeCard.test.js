import { render, screen } from '@testing-library/react';
import ExchangeCard from '../ExchangeCard.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockExchangeCard = () => {
  return (
    <BrowserRouter>
      <ExchangeCard />
    </BrowserRouter>
  );
};

describe('ExchangeCard', () => {
  it('renders ExchangeCard component without error', () => {
    render(<MockExchangeCard />);
  });
});
