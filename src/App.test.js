import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import Form from './pages';

describe('Tests for DogForm component', () => {
  it('Should add new data when form has beem submitted', async () => {
    const { getByTestId } = render(<Form />);
    const fieldNode = await waitForElement(() => getByTestId('form-field'));
    console.log(fieldNode);
  });
});
