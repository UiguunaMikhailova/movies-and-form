import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import Home from '.';

test('render home', async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  expect(screen.getByRole(/search/i)).toBeInTheDocument();
  expect(screen.getByRole(/homePage/i)).toBeInTheDocument();
  expect(screen.getByRole(/cardList/i)).toBeInTheDocument();
});
