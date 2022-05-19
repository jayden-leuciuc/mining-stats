import { render, screen } from '@testing-library/react';
import Exchange from '../Exchange.component';
import '@testing-library/jest-dom';

describe('Exchange', () => {
  it('renders Exchange component without errors', () => {
    render(<Exchange />);
  });
});
