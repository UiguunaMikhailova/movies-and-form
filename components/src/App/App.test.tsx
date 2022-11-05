import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import App from '.';

const store = setupStore();

test('render app', async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });

  const header = screen.getByRole(/header/i);
  expect(header).toBeInTheDocument();
});
