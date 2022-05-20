import { render, screen } from '@testing-library/react';
import HardwareSpecs from '../HardwareSpecs.component';
import '@testing-library/jest-dom';

describe('HardwareSpecs', () => {
  it('renders HardwareSpecs component without error', () => {
    render(<HardwareSpecs />);
  });
});
