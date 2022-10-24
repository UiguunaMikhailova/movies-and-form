import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import CardList from '.';
import { cards } from 'Constants';

test('render cardList', async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <CardList cards={cards} isLoading={false} />
      </BrowserRouter>
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
