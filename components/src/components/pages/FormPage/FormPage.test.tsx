import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import FormPage from '.';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';

const store = setupStore();

test('render form page', async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );
  });

  const formPage = screen.getByRole(/formPage/i);
  const formCardList = screen.getByRole(/formCardList/i);

  expect(formPage).toBeInTheDocument();
  expect(formCardList).toBeInTheDocument();
});
