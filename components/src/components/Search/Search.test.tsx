import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import Search from '.';
import Header from 'Components/Header';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import * as API from '../../Requests';
import { response } from 'Constants';
import Home from 'Components/pages/home';

const store = setupStore();

describe('search component', () => {
  test('render search', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Search searchCards={() => {}} />
          </BrowserRouter>
        </Provider>
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
    const mockFridge = {
      key: '',
    };
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockFridge.key = value;
    });
    global.Storage.prototype.getItem = jest.fn((key) => (mockFridge.key = key));
    const key = 'search';
    const value = 'qwerty';
    global.Storage.prototype.setItem(key, value);

    expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(mockFridge.key).toEqual(value);
  });

  test('api requests', async () => {
    const getDataMock = jest.spyOn(API, 'getData');
    await act(async () => {
      getDataMock.mockResolvedValue(response);
    });
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      );
    });
    const input = screen.getByRole('search');
    expect(getDataMock).toHaveBeenCalled();
    await act(async () => {
      fireEvent.input(input, {
        target: { value: 'harry' },
      });
      fireEvent.keyDown(input, {
        key: 'Enter',
      });
    });
    expect(getDataMock).toHaveBeenCalled();
  });
});
