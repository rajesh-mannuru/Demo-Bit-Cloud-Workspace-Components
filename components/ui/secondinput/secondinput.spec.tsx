import React from 'react';
import { render } from '@testing-library/react';
import { BasicSecondinput } from './secondinput.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSecondinput />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
