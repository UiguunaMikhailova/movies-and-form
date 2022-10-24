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

  const header = screen.getByRole('header');
  const home = screen.getByText('Home');
  const homePage = screen.getByRole('homePage');
  const about = screen.getByText('About');
  const aboutLink = screen.getByRole('aboutLink');
  const aboutPage = screen.getByRole('aboutPage');

  expect(header).toBeInTheDocument();
  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(homePage).toBeInTheDocument();
  fireEvent.click(aboutLink);
  expect(aboutPage).toBeInTheDocument();
});
