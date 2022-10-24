import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import FormCardList from '.';
import { formCards } from 'Constants';

test('render form page', async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <FormCardList cards={formCards} />
      </BrowserRouter>
    );
  });

  const cardsArray = screen.getAllByRole('form-card');
  cardsArray.forEach((item) => {
    expect(item).toHaveTextContent(/ivan/i);
  });
  expect(cardsArray).toHaveLength(3);
});
