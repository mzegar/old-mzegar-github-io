import React from 'react';
import { render } from '@testing-library/react';
import MainApp from './main';

test('renders learn react link', () => {
  const { getByText } = render(<MainApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
