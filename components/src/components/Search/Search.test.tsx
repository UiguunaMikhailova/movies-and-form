import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
// import Home from 'Components/pages/home';
import Search from '.';
import Header from 'Components/Header';

describe('search component', () => {
  test('render search', () => {
    render(
      <BrowserRouter>
        <Header />
        <Search searchCards={() => {}} />
      </BrowserRouter>
    );
    const input = screen.getByRole('search') as HTMLInputElement;
    const about = screen.getByRole('aboutLink');
    const home = screen.getByRole('homeLink');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'qwerty' } });
    fireEvent.click(about);
    fireEvent.click(home);
    expect(input.value).toBe('qwerty');
  });

  test('localStorage', () => {
    jest.spyOn(localStorage, 'setItem');
    localStorage.setItem = jest.fn();
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();
    const key = 'search';
    const value = 'qwerty';
    localStorage.setItem(key, value);
    expect(localStorage.getItem(key)).toEqual(value);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
