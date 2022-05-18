import { render, screen } from '@testing-library/react';
import HardwareHeader from '../HardwareHeader.component';
import '@testing-library/jest-dom';

describe('HardwareHeader', () => {
  it('renders HardwareHeader component without error', () => {
    render(<HardwareHeader />);
  });
});
