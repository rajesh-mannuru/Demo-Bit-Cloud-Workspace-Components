import React from 'react';
import { render } from '@testing-library/react';
import { BasicThirdinput } from './thirdinput.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicThirdinput />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
