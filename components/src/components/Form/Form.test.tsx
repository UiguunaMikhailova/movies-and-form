import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import Form from './Form';
import userEvent from '@testing-library/user-event';

const updateCards = jest.fn();
global.URL.createObjectURL = jest.fn();

describe('Form', () => {
  beforeEach(async () => {
    await act(() => {
      render(
        <BrowserRouter>
          <Form updateCards={updateCards} save={false} />
        </BrowserRouter>
      );
    });
  });

  test('render form', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('form')).toHaveTextContent('Create personal card');
    expect(screen.getByPlaceholderText('Your name...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your surname...')).toBeInTheDocument();
    expect(screen.getByRole('submit-button')).toBeInTheDocument();
  });

  test('disabled submit button', () => {
    const submitBtn = screen.getByRole('submit-button') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(true);
  });

  test('not disabled submit button if one of the fields is not empty', async () => {
    await act(async () => {
      fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
    });
    const submitBtn = screen.getByRole('submit-button') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(false);
  });

  test('input to have value', async () => {
    await act(async () => {
      fireEvent.input(screen.getByPlaceholderText('Your name...'), {
        target: { value: 'harry potter' },
      });
    });
    expect(screen.getByPlaceholderText('Your name...')).toHaveValue('harry potter');
  });

  test('upload file', async () => {
    const fileInput = screen.getByRole('file');
    const file = new File(['q'], 'q.jpg', { type: 'image/jpeg' });
    await act(() => {
      userEvent.upload(fileInput, file);
    });
    expect((fileInput as HTMLInputElement).files![0]).toBe(file);
  });

  test('disabled submit button after click if changes is not at all inputs', async () => {
    await act(async () => {
      fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
    });
    const submitBtn = screen.getByRole('submit-button') as HTMLButtonElement;
    expect(submitBtn.disabled).toBe(false);
    await act(async () => {
      fireEvent.click(submitBtn);
    });
    expect(submitBtn.disabled).toBe(true);
  });

  test('show errors if fields is empty after click on submit button', async () => {
    await act(async () => {
      fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
      fireEvent.click(screen.getByRole('submit-button'));
    });
    const errors = screen.queryAllByRole('error-message');
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

    const errors = screen.queryAllByRole('error-message');
    errors.forEach(async (message) => {
      await waitFor(() => expect(message).not.toBeInTheDocument());
    });
  });

  // test('updateCards function is called', async () => {
  //   const updateCards = jest.fn();
  //   await act(() => {
  //     render(
  //       <BrowserRouter>
  //         <Form updateCards={updateCards} save={false} />
  //       </BrowserRouter>
  //     );
  //   });

  //   const fileInput = screen.getByRole('file');
  //   const nameInput = screen.getByPlaceholderText('Your name...');
  //   const surnameInput = screen.getByPlaceholderText('Your surname...');
  //   const dateInput = screen.getByRole('date');
  //   const genderInput = screen.getByRole('gender');
  //   const countryInput = screen.getByRole('country');
  //   const checkboxInput = screen.getByRole('checkbox');
  //   const submitBtn = screen.getByRole('submit-button');
  //   await act(() => {
  //     const file = new File(['q'], 'q.jpg', { type: 'image/jpeg' });
  //     fireEvent.input(nameInput, { target: { value: 'a' } });
  //     fireEvent.input(surnameInput, { target: { value: 'a' } });
  //     fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
  //     fireEvent.change(countryInput, { target: { value: 'France' } });
  //     fireEvent.click(genderInput);
  //     fireEvent.click(checkboxInput);
  //     userEvent.upload(fileInput, file);
  //     fireEvent.click(submitBtn);
  //   });
  //   await act(async () => {
  //     await waitFor(() => expect(updateCards).toBeCalledTimes(1));
  //   });
  // });
});
