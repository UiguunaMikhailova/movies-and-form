import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import FormCard from '.';
import { formCards } from 'Constants';

const formCard = formCards[0];

test('render card', async () => {
  await act(() => {
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
  });

  const cardElement = screen.getByRole(/card/i);
  expect(cardElement).toHaveTextContent(/ivan/i);
  expect(cardElement).toBeInTheDocument();
});
