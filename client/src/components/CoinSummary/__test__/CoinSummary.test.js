import { render, screen } from '@testing-library/react';
import CoinSummary from '../CoinSummary.component';
import '@testing-library/jest-dom';

describe('CoinSummary', () => {
  it('renders CoinSummary component without error', () => {
    render(<CoinSummary />);
  });
});
