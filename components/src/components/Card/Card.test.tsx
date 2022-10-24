import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import Card from '.';
import { card } from 'Constants/Constants';

test('render card', async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Card
          key={0}
          title={card.title}
          poster_path={card.poster_path}
          vote_average={card.vote_average}
          overview={card.overview}
        />
      </BrowserRouter>
    );
  });

  const title = screen.getByText('Jack the Giant Slayer');
  const average = screen.getByText('5.8');
  const cardElement = screen.getByRole(/card/i);

  expect(title).toBeInTheDocument();
  expect(average).toBeInTheDocument();
  expect(cardElement).toBeInTheDocument();
});
