import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import { BrowserRouter } from 'react-router-dom';
import Form from './Form';
import FormPage from 'Components/pages/FormPage/FormPage';

const updateCards = jest.fn(FormPage.prototype.updateCards);

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
  });

  test('disabled submit button', () => {
    expect(screen.getByRole('submit-button')).toBeInTheDocument();
    expect(screen.getByRole('submit-button')).toHaveAttribute('disabled');
  });

  test('not disabled submit button if one of the fields is not empty', () => {
    fireEvent.input(screen.getByPlaceholderText('Your name...'), { target: { value: 'a' } });
    expect(screen.getByRole('submit-button')).not.toHaveAttribute('disabled');
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
    fireEvent.click(screen.getByRole('submit-button'));
    [
      'Incorrect name',
      'Incorrect surname',
      'Please enter date',
      'Please enter country',
      'The gender field is required',
      'This checkbox is required',
    ].forEach((message) => {
      expect(screen.queryByText(message)).not.toBeInTheDocument();
    });
  });
});
