import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import Home from '.';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';

const store = setupStore();

test('render home', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  });

  const search = screen.getByRole(/search/i);
  const cardList = screen.getByRole(/cardList/i);

  expect(search).toBeInTheDocument();
  expect(cardList).toBeInTheDocument();
});
