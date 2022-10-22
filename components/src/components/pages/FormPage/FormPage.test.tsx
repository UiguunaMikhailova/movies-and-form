import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import FormPage from './FormPage';

test('render form page', async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
  });

  expect(screen.getByRole(/formPage/i)).toBeInTheDocument();
  expect(screen.getByRole(/formCardList/i)).toBeInTheDocument();
});
