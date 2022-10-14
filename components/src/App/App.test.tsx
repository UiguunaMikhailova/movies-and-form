import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('render app', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
  expect(screen.getByRole(/header/i)).toBeInTheDocument();
});
