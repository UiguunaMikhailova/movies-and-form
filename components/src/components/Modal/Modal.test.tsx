import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import Modal from '.';
import { card } from 'Constants';

const closeModal = jest.fn();

test('render modal and closeModal function be called after click on overlay', async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Modal
          closeModal={closeModal}
          key={0}
          title={card.title}
          poster_path={card.poster_path}
          vote_average={card.vote_average}
          overview={card.overview}
        />
      </BrowserRouter>
    );
  });

  const title = screen.getByText('Jack the Giant Slayer');
  const overlay = screen.getByRole('overlay');

  expect(title).toBeInTheDocument();
  expect(overlay).toBeInTheDocument();
  await act(() => {
    fireEvent.click(overlay);
  });
  expect(closeModal).toBeCalledTimes(1);
});
