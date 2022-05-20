import { render, screen, fireEvent } from '@testing-library/react';
import Exchange from '../Exchange.component';
import '@testing-library/jest-dom';

describe('Exchange', () => {
  it('renders Exchange component without errors', () => {
    render(<Exchange />);
  });
  it('should render input element', () => {
    render(<Exchange />);
    const searchElement = screen.getByPlaceholderText(/Search Base/i);
    expect(searchElement).toBeInTheDocument();
  });

  it('should be able to type into input', () => {
    render(<Exchange />);
    const searchElement = screen.getByPlaceholderText(/Search Base/i);
    fireEvent.change(searchElement, { target: { value: 'bitcoin' } });
    expect(searchElement.value).toBe('bitcoin');
  });
});
