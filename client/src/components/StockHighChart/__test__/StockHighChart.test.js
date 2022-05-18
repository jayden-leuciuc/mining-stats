import { render, screen } from '@testing-library/react';
import StockHighChart from '../StockHighChart.component';
import '@testing-library/jest-dom';

describe('StockHighChart', () => {
  it('renders StockHighChart component without error', () => {
    render(<StockHighChart />);
  });
});
