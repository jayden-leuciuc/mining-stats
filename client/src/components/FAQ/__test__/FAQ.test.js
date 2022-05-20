import { render, screen } from '@testing-library/react';
import FAQ from '../FAQ.component';
import '@testing-library/jest-dom';

describe('FAQ', () => {
  it('renders FAQ component without error', () => {
    render(<FAQ />);
  });
});
