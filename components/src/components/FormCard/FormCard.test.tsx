import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import FormCard from '.';
import { formCards } from 'Constants';

const formCard = formCards[0];
const store = setupStore();

test('render card', async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormCard
            key={0}
            name={formCard.name}
            surname={formCard.surname}
            date={formCard.date}
            gender={formCard.gender}
            country={formCard.country}
            file={formCard.file}
          />
        </BrowserRouter>
      </Provider>
    );
  });

  const cardElement = screen.getByRole(/card/i);
  expect(cardElement).toHaveTextContent(/ivan/i);
  expect(cardElement).toBeInTheDocument();
});
