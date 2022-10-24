import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import FormPage from '.';

test('render form page', async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
  });

  const formPage = screen.getByRole(/formPage/i);
  const formCardList = screen.getByRole(/formCardList/i);

  expect(formPage).toBeInTheDocument();
  expect(formCardList).toBeInTheDocument();
});
