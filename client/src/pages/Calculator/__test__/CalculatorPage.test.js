import { render, screen } from '@testing-library/react';
import Calculator from '../CalculatorPage.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockCalculator = () => {
  return (
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>
  );
};

describe('Calculator', () => {
  it('renders Calculator component without error', () => {
    render(<MockCalculator />);
  });
});
