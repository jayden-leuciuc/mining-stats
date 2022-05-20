import { render, screen } from '@testing-library/react';
import CustomButton from '../CustomButton.component';
import '@testing-library/jest-dom';

describe('Custom Button', () => {
  it('renders text passed into label prop', () => {
    render(<CustomButton label='title' />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
