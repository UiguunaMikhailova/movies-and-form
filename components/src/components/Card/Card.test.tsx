import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

const card = {
  title: 'The Jack in the Box: Awakening',
  poster_path: '/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg',
  vote_average: 6.3,
  overview:
    'When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.',
};

test('card', () => {
  render(
    <BrowserRouter>
      <Card
        key={0}
        title={card.title}
        poster_path={card.poster_path}
        vote_average={card.vote_average}
        overview={card.overview}
      />
    </BrowserRouter>
  );
  expect(screen.getByText('The Jack in the Box: Awakening')).toBeInTheDocument();
});
