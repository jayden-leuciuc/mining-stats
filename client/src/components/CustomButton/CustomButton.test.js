import React from 'react';
import ReactDOM from 'react-dom';
import CustomButton from './CustomButton.component';

import { render } from '@testing-library/react';
import expect from 'jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<CustomButton></CustomButton>, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<CustomButton label='Click me' />);
  expect(getByTestId('button')).toHaveTextContent('');
});
