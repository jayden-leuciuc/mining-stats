import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockHomePage = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

describe('HomePage', () => {
  it('renders HomePage component without error', () => {
    render(<MockHomePage />);
  });
});
