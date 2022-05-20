import { render, screen } from '@testing-library/react';
import FlexBoxContainer from '../FlexBoxContainer.component';
import '@testing-library/jest-dom';

describe('FlexBoxContainer', () => {
  it('renders FlexBoxContainer component without error', () => {
    render(<FlexBoxContainer />);
  });
});
