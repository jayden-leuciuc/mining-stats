import { render, screen } from '@testing-library/react';
import StaticPageTemplate from '../StaticPageTemplate.component';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const MockStaticPageTemplate = () => {
  return (
    <BrowserRouter>
      <StaticPageTemplate />
    </BrowserRouter>
  );
};

describe('StaticPageTemplate', () => {
  it('renders StaticPageTemplate component without error', () => {
    render(<MockStaticPageTemplate />);
  });
});
