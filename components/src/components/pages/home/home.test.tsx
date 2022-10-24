import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import Home from '.';

test('render home', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  const search = screen.getByRole(/search/i);
  const cardList = screen.getByRole(/cardList/i);

  expect(search).toBeInTheDocument();
  expect(cardList).toBeInTheDocument();
});
