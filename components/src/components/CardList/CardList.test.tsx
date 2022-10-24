import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import { cards } from 'Constants/Constants';
import CardList from '.';

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
