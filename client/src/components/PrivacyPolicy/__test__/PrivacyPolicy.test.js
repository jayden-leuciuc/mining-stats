import { render, screen } from '@testing-library/react';
import PrivacyPolicy from '../PrivacyPolicy.component';
import '@testing-library/jest-dom';

describe('PrivacyPolicy', () => {
  it('renders PrivacyPolicy component without error', () => {
    render(<PrivacyPolicy />);
  });
});
