import { render, screen } from '@testing-library/react';
import Contact from '../Contact.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockContact = () => {
  return (
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
};

describe('Contact', () => {
  it('renders Contact component without error', () => {
    render(<MockContact />);
  });
});
