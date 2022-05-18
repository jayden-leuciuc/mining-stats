import { render, screen } from '@testing-library/react';
import ExchangePage from '../ExchangePage.component';
import '@testing-library/jest-dom';

describe('ExchangePage', () => {
  it('renders ExchangePage component without error', () => {
    render(<ExchangePage />);
  });
});
