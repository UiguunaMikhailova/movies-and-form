import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import Search from '.';
import Header from 'Components/Header';
import * as API from '../../Requests/Requests';
import { cards, searchUrl } from '../../Constants/Constants';
import Home from 'Components/pages/home';

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

  test('api requests', async () => {
    const getDataMock = jest.spyOn(API, 'getData');
    getDataMock.mockResolvedValue(cards);

    await act(async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });

    expect(getDataMock).toHaveBeenCalled();
    expect(screen.getByText('Jack the Giant Slayer')).toBeInTheDocument();
    const input = screen.getByRole('search');
    fireEvent.input(input, {
      target: { value: 'harry' },
    });
    fireEvent.keyDown(input, {
      key: 'Enter',
    });
    expect(getDataMock).toHaveBeenCalledWith(`${searchUrl}harry`);
  });
});
