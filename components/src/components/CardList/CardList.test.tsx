import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import Card from 'Components/Card';
import CardList from '.';
import { cards } from 'Constants';

const store = setupStore();

test('render cardList', async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {cards.map((item, index: number) => (
            <Card
              key={index}
              id={index}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              vote_count={item.vote_count}
              overview={item.overview}
            />
          ))}
          <CardList />
        </BrowserRouter>
      </Provider>
    );
  });

  const cardsArray = screen.getAllByRole('card');
  const title = screen.getByText('Jack the Giant Slayer');

  expect(title).toBeInTheDocument();
  cardsArray.forEach((item) => {
    expect(item).toHaveTextContent(/jack/i);
  });
  expect(cardsArray).toHaveLength(3);
});
