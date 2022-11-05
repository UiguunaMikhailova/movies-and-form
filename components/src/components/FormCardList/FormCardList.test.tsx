import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import FormCardList from '.';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import { formCards } from 'Constants';
import FormCard from 'Components/FormCard';

const store = setupStore();

test('render form page', async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {formCards.map((item, index) => {
            return (
              <FormCard
                key={index}
                name={item.name}
                surname={item.surname}
                date={item.date}
                gender={item.gender}
                country={item.country}
                file={item.file}
              />
            );
          })}
          <FormCardList />
        </BrowserRouter>
      </Provider>
    );
  });

  const cardsArray = screen.getAllByRole('form-card');
  cardsArray.forEach((item) => {
    expect(item).toHaveTextContent(/ivan/i);
  });
  expect(cardsArray).toHaveLength(3);
});
