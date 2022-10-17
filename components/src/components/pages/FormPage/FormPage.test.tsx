import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import FormPage from './FormPage';

test('render form page', () => {
  render(
    <BrowserRouter>
      <FormPage />
    </BrowserRouter>
  );
  expect(screen.getByRole(/formPage/i)).toBeInTheDocument();
  expect(screen.getByRole(/formCardList/i)).toBeInTheDocument();
});
