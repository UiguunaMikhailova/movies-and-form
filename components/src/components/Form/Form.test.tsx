import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/react/dont-cleanup-after-each';
import Form from '.';

global.URL.createObjectURL = jest.fn();

describe('Form', () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      );
    });
  });

  test('render form', () => {
    const form = screen.getByRole('form');
    const name = screen.getByPlaceholderText('Your name...');
    const surname = screen.getByPlaceholderText('Your surname...');
    const submitBtn = screen.getByRole('submit-button');

    expect(form).toBeInTheDocument();
    expect(form).toHaveTextContent('Create personal card');
    expect(name).toBeInTheDocument();
    expect(surname).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  test('disabled submit button', () => {
    const submitBtn = screen.getByRole('submit-button') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(true);
  });

  test('not disabled submit button if one of the fields is not empty', async () => {
    const name = screen.getByPlaceholderText('Your name...');
    const submitBtn = screen.getByRole('submit-button') as HTMLButtonElement;

    await act(async () => {
      fireEvent.input(name, { target: { value: 'a' } });
    });
    expect(submitBtn.disabled).toBe(false);
  });

  test('input to have value', async () => {
    const name = screen.getByPlaceholderText('Your name...');

    await act(async () => {
      fireEvent.input(name, {
        target: { value: 'harry potter' },
      });
    });
    expect(name).toHaveValue('harry potter');
  });

  test('upload file', async () => {
    const fileInput = screen.getByRole('file') as HTMLInputElement;
    const file = new File(['q'], 'q.jpg', { type: 'image/jpeg' });

    await act(() => {
      userEvent.upload(fileInput, file);
    });
    expect(fileInput.files![0]).toBe(file);
  });

  test('disabled submit button after click if changes is not at all inputs', async () => {
    const name = screen.getByPlaceholderText('Your name...');
    const submitBtn = screen.getByRole('submit-button') as HTMLButtonElement;

    await act(async () => {
      fireEvent.input(name, { target: { value: 'a' } });
    });
    expect(submitBtn.disabled).toBe(false);
    await act(async () => {
      fireEvent.click(submitBtn);
    });
    expect(submitBtn.disabled).toBe(true);
  });

  test('show errors if fields is empty after click on submit button', async () => {
    const name = screen.getByPlaceholderText('Your name...');
    const submitBtn = screen.getByRole('submit-button') as HTMLButtonElement;
    const errors = screen.queryAllByRole('error-message');

    await act(async () => {
      fireEvent.input(name, { target: { value: 'a' } });
      fireEvent.click(submitBtn);
    });
    errors.forEach((message) => {
      expect(message).toBeInTheDocument();
    });
  });

  test('don`t show errors if all fields is not empty', async () => {
    const fileInput = screen.getByRole('file');
    const nameInput = screen.getByPlaceholderText('Your name...');
    const surnameInput = screen.getByPlaceholderText('Your surname...');
    const dateInput = screen.getByRole('date');
    const genderInput = screen.getByRole('gender');
    const countryInput = screen.getByRole('country');
    const checkboxInput = screen.getByRole('checkbox');
    const submitBtn = screen.getByRole('submit-button');
    const errors = screen.queryAllByRole('error-message');

    await act(() => {
      const file = new File(['q'], 'q.jpg', { type: 'image/jpeg' });
      fireEvent.input(nameInput, { target: { value: 'a' } });
      fireEvent.input(surnameInput, { target: { value: 'a' } });
      fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
      fireEvent.change(countryInput, { target: { value: 'France' } });
      fireEvent.click(genderInput);
      fireEvent.click(checkboxInput);
      userEvent.upload(fileInput, file);
      fireEvent.click(submitBtn);
    });

    errors.forEach(async (message) => {
      await waitFor(() => expect(message).not.toBeInTheDocument());
    });
  });
});
