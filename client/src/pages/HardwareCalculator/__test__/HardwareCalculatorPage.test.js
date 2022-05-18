import { render, screen } from '@testing-library/react';
import HardwareCalculatorPage from '../HardwareCalculatorPage.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockHardwareCalculatorPage = () => {
  return (
    <BrowserRouter>
      <HardwareCalculatorPage />
    </BrowserRouter>
  );
};

describe('HardwareCalculatorPage', () => {
  it('renders HardwareCalculatorPage component without error', () => {
    render(<MockHardwareCalculatorPage />);
  });
});
