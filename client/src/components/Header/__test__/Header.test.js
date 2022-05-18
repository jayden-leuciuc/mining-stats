import { render, screen } from '@testing-library/react';
import Header from '../Header.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renders Header component without error', () => {
    render(<MockHeader />);
  });
});
