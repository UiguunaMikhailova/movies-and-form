import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import CardList from '.';
import { cards } from 'Constants/Constants';

test('cardList', () => {
  render(
    <BrowserRouter>
      <CardList cards={cards} isLoading={false} />
    </BrowserRouter>
  );
  expect(screen.getByText('Jack the Giant Slayer')).toBeInTheDocument();
  const cardsArray = screen.getAllByRole('card');
  cardsArray.forEach((item) => {
    expect(item).toHaveTextContent(/jack/i);
  });
});
