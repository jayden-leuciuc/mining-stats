import { render, screen } from '@testing-library/react';
import AssetPage from '../AssetPage.component';
import '@testing-library/jest-dom';

describe('AssetPage', () => {
  it('renders AssetPage component without error', () => {
    render(<AssetPage />);
  });
});
