import { render, screen } from '@testing-library/react';
import MarketDataTable from '../MarketDataTable.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockInputSuccess = () => {
  return (
    <BrowserRouter>
      <InputSuccess />
    </BrowserRouter>
  );
};

describe('MarketDataTable', () => {
  it('renders MarketDataTable component without error', () => {
    render(<MarketDataTable />);
  });
});
