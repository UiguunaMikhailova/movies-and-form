import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import { formCards } from 'Constants/Constants';
import FormCard from './FormCard';

const formCard = formCards[0];

test('render card', () => {
  render(
    <BrowserRouter>
      <FormCard
        key={0}
        name={formCard.name}
        surname={formCard.surname}
        date={formCard.date}
        gender={formCard.gender}
        country={formCard.country}
        file={formCard.file}
      />
    </BrowserRouter>
  );
  expect(screen.getByRole(/card/i)).toHaveTextContent(/ivan/i);
  expect(screen.getByRole(/card/i)).toBeInTheDocument();
});
