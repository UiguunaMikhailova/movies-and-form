import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import Card from '.';
import { card } from 'Constants';

const store = setupStore();

test('render card', async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card
            key={0}
            id={0}
            title={card.title}
            poster_path={card.poster_path}
            vote_average={card.vote_average}
            vote_count={card.vote_count}
            overview={card.overview}
          />
        </BrowserRouter>
      </Provider>
    );
  });

  const title = screen.getByText('Jack the Giant Slayer');
  const average = screen.getByText('5.8');
  const cardElement = screen.getByRole(/card/i);

  expect(title).toBeInTheDocument();
  expect(average).toBeInTheDocument();
  expect(cardElement).toBeInTheDocument();
});
