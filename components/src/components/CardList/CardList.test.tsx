import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import { cards } from 'Constants/Constants';
import CardList from '.';

test('render cardList', () => {
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
  expect(cardsArray).toHaveLength(3);
});
