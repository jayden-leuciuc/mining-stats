import { findByText, render, screen } from '@testing-library/react';
import NewsFeed from '../NewsFeed.component';
import '@testing-library/jest-dom';

describe('NewsFeed', () => {
  it('renders NewsFeed component without error', () => {
    render(<NewsFeed />);
  });
});
