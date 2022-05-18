import { render, screen } from '@testing-library/react';
import CoinDescription from '../CoinDescription.component';
import '@testing-library/jest-dom';

describe('CoinDescription', () => {
  it('renders CoinDescription component without error', () => {
    render(<CoinDescription />);
  });
});
