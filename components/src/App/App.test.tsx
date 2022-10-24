import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import App from './App';

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
