import { render, screen } from '@testing-library/react';
import ViewHardware from '../ViewHardware.component';
import '@testing-library/jest-dom';

describe('ViewHardware', () => {
  it('renders ViewHardware component without error', () => {
    render(<ViewHardware />);
  });
});
