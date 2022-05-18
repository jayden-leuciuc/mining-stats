import { render, screen } from '@testing-library/react';
import MiningCoins from '../MiningCoins.component';
import '@testing-library/jest-dom';

describe('MiningCoins', () => {
  it('renders MiningCoins component without error', () => {
    render(<MiningCoins />);
  });
});
