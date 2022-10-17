import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import Form from './Form';
import FormPage from 'Components/pages/FormPage/FormPage';
import userEvent from '@testing-library/user-event';

const updateCards = jest.fn(FormPage.prototype.updateCards);
global.URL.createObjectURL = jest.fn();

describe('Form', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Form updateCards={updateCards} save={false} />
      </BrowserRouter>
    );
  });

  test('render form', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('form')).toHaveTextContent('Create personal card');
    expect(screen.getByPlaceholderText('Your name...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your surname...')).toBeInTheDocument();
    expect(screen.getByRole('submit-button')).toBeInTheDocument();
  });

  test('disabled submit button', () => {
    expect(screen.getByRole('submit-button')).toHaveAttribute('disabled');
  });

  test('not disabled submit button if one of the fields is not empty', () => {
    fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
    expect(screen.getByRole('submit-button')).not.toHaveAttribute('disabled');
  });

  test('input to have value', () => {
    fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
    expect(screen.getByPlaceholderText('Your name...')).toHaveValue('a');
  });

  test('upload file', () => {
    const fileInput = screen.getByRole('file');
    const file = new File(['q'], 'q.jpg', { type: 'image/jpeg' });
    userEvent.upload(fileInput, file);
    expect((fileInput as HTMLInputElement).files![0]).toBe(file);
  });

  test('disabled submit button after click if changes is not at all inputs', () => {
    fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
    expect(screen.getByRole('submit-button')).not.toHaveAttribute('disabled');
    fireEvent.click(screen.getByRole('submit-button'));
    expect(screen.getByRole('submit-button')).toHaveAttribute('disabled');
  });

  test('show errors if fields is empty after click on submit button', () => {
    fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
    fireEvent.click(screen.getByRole('submit-button'));
    const errors = screen.getAllByRole('error-message');
    errors.forEach((message) => {
      expect(message).toBeInTheDocument();
    });
  });

  test('don`t show errors if all fields is not empty', () => {
    fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
    fireEvent.input(screen.getByPlaceholderText('Your surname...'), { target: { value: 'a' } });
    fireEvent.change(screen.getByRole('date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByRole('country'), { target: { value: 'France' } });
    fireEvent.click(screen.getByRole('gender'));
    fireEvent.click(screen.getByRole('checkbox'));
    const fileInput = screen.getByRole('file');
    const file = new File(['q'], 'q.jpg', { type: 'image/jpeg' });
    userEvent.upload(fileInput, file);
    fireEvent.click(screen.getByRole('submit-button'));
    const errors = screen.queryAllByRole('error-message');

    errors.forEach((message) => {
      expect(message).not.toBeInTheDocument();
    });
  });

  test('updateCards function is called', () => {
    fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
    fireEvent.input(screen.getByPlaceholderText('Your surname...'), { target: { value: 'a' } });
    fireEvent.change(screen.getByRole('date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByRole('country'), { target: { value: 'France' } });
    fireEvent.click(screen.getByRole('gender'));
    fireEvent.click(screen.getByRole('checkbox'));
    const fileInput = screen.getByRole('file');
    const file = new File(['q'], 'q.jpg', { type: 'image/jpeg' });
    userEvent.upload(fileInput, file);
    fireEvent.click(screen.getByRole('submit-button'));

    expect(updateCards).toBeCalledTimes(1);
  });
});
