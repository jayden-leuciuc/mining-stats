import { render, screen } from '@testing-library/react';
import Pools from '../Pools.component';
import '@testing-library/jest-dom';

describe('Pools', () => {
  it('renders Pools component without error', () => {
    render(<Pools />);
  });
});
