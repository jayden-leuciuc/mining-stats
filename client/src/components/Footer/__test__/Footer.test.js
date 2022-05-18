import { render, screen } from '@testing-library/react';
import Footer from '../Footer.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

describe('Custom Button', () => {
  it('renders footer correctly', () => {
    render(<MockFooter />);
  });
});
