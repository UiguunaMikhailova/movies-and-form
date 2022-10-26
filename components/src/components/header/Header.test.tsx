import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import App from 'App';

test('Render header', async () => {
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

  expect(header).toBeInTheDocument();
  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(homePage).toBeInTheDocument();
  await act(async () => {
    fireEvent.click(aboutLink);
  });
  const aboutPage = screen.getByRole('aboutPage');
  expect(aboutPage).toBeInTheDocument();
});
