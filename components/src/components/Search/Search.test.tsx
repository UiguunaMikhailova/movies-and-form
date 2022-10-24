import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import Home from 'Components/pages/home';
import Search from '.';
import Header from 'Components/Header';
import * as API from '../../Requests';
import { cards, searchUrl } from '../../Constants';

describe('search component', () => {
  test('render search', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Header />
          <Search searchCards={() => {}} />
        </BrowserRouter>
      );
    });

    const input = screen.getByRole('search') as HTMLInputElement;
    const about = screen.getByRole('aboutLink');
    const home = screen.getByRole('homeLink');

    expect(input).toBeInTheDocument();
    await act(() => {
      fireEvent.change(input, { target: { value: 'qwerty' } });
      fireEvent.click(about);
      fireEvent.click(home);
    });
    expect(input.value).toBe('qwerty');
  });

  test('localStorage', () => {
    jest.spyOn(localStorage, 'setItem');
    jest.spyOn(Storage.prototype, 'setItem');
    localStorage.setItem = jest.fn();
    Storage.prototype.setItem = jest.fn();
    const key = 'search';
    const value = 'qwerty';
    localStorage.setItem(key, value);

    expect(localStorage.getItem(key)).toEqual(value);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test('api requests', async () => {
    const getDataMock = jest.spyOn(API, 'getData');

    await act(async () => {
      getDataMock.mockResolvedValue(cards);
    });

    await act(async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });

    const title = screen.getByText('Jack the Giant Slayer');
    const input = screen.getByRole('search');
    expect(getDataMock).toHaveBeenCalled();
    expect(title).toBeInTheDocument();

    await act(async () => {
      fireEvent.input(input, {
        target: { value: 'harry' },
      });
      fireEvent.keyDown(input, {
        key: 'Enter',
      });
    });

    expect(getDataMock).toHaveBeenCalledWith(`${searchUrl}harry`);
  });
});
