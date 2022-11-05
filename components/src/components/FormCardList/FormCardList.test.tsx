import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import FormCardList from '.';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';

const store = setupStore();

test('render form page', async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormCardList />
        </BrowserRouter>
      </Provider>
    );
  });

  // const cardsArray = screen.getAllByRole('form-card');
  // cardsArray.forEach((item) => {
  //   expect(item).toHaveTextContent(/ivan/i);
  // });
  // expect(cardsArray).toHaveLength(3);
});
