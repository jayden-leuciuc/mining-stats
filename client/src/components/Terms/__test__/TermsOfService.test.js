import { render, screen } from '@testing-library/react';
import TermsOfService from '../TermsOfService.component';
import '@testing-library/jest-dom';

describe('TermsOfService', () => {
  it('renders TermsOfService component without error', () => {
    render(<TermsOfService />);
  });
});
