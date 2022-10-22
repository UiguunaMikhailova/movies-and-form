import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import Card from '.';
import { cards } from 'Constants/Constants';

const card = cards[0];

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
  expect(screen.getByText('Jack the Giant Slayer')).toBeInTheDocument();
  expect(screen.getByText('5.8')).toBeInTheDocument();
  expect(screen.getByRole(/card/i)).toBeInTheDocument();
});
