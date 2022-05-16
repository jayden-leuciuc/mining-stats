import React from 'react';
import { render } from '@testing-library/react';

import AlgoTable from './AlgoTable.component';

describe('AlgoTable', () => {
  test('Renders AlgoTable component', async () => {
    render(<AlgoTable />);

    expect(await screen.findByText(/Algorithms/)).toBeInTheDocument();
  });
});
