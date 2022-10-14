import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
// import Header from '.';
import App from 'App/App';

test('Render header', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByRole('header')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByRole('homePage')).toBeInTheDocument();
  const aboutLink = screen.getByRole('aboutLink');
  fireEvent.click(aboutLink);
  expect(screen.getByRole('aboutPage')).toBeInTheDocument();
});
