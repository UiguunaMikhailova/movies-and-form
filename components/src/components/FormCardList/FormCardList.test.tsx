import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import FormCardList from './FormCardList';
import { formCards } from 'Constants/Constants';

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
