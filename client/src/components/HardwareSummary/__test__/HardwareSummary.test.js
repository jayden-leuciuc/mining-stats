import { render, screen } from '@testing-library/react';
import HardwareSummary from '../HardwareSummary.component';
import '@testing-library/jest-dom';

describe('HardwareSummary', () => {
  it('renders HardwareSummary component without error', () => {
    render(<HardwareSummary />);
  });
});
