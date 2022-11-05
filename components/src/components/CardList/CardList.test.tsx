import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import CardList from '.';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';

const store = setupStore();

test('render cardList', async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardList />
        </BrowserRouter>
      </Provider>
    );
  });

  // const cardsArray = screen.getAllByRole('card');
  // const title = screen.getByText('Jack the Giant Slayer');

  // expect(title).toBeInTheDocument();
  // cardsArray.forEach((item) => {
  //   expect(item).toHaveTextContent(/jack/i);
  // });
  // expect(cardsArray).toHaveLength(3);
});
