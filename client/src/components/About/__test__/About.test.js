import { render, screen } from '@testing-library/react';
import About from '../About.component';
import '@testing-library/jest-dom';

describe('About', () => {
  it('renders about component without error', () => {
    render(<About />);
    const headerElement = screen.getAllByText(/about/i);
    expect(headerElement.length).toBe(2);
  });
});
