import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('render app', async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  const header = screen.getByRole(/header/i);
  expect(header).toBeInTheDocument();
});
