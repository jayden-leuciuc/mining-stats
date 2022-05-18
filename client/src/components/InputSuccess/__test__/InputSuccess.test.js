import { render, screen } from '@testing-library/react';
import InputSuccess from '../InputSuccess.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockInputSuccess = () => {
  return (
    <BrowserRouter>
      <InputSuccess />
    </BrowserRouter>
  );
};

describe('InputSuccess', () => {
  it('renders InputSuccess component without error', () => {
    render(<MockInputSuccess />);
  });
});
