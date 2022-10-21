import React from 'react';
import COUNTRIES from 'Constants/countries';
import './Form.css';
import { FormInputs, FormProps } from 'types/types';
import { useForm } from 'react-hook-form';

export default function Form({ updateCards, save }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = useForm<FormInputs>({ mode: 'onSubmit' });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    updateCards({
      name: data.name,
      surname: data.surname,
      date: data.date,
      country: data.country,
      file: URL.createObjectURL(data.file[0]),
      gender: data.gender,
    });
    reset();
    setValue('checkbox', false);
  };

  return (
    <div className="sign-in" role="form">
      <h3 className="form__title" id="form__title">
        Create personal card
      </h3>
      <form className="sign-in__form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          {errors.name && (
            <p className="form__error-msg" role="error-message">
              Incorrect name
            </p>
          )}
        </div>
        <input
          className="form__input"
          type="text"
          placeholder="Your name..."
          {...register('name', { required: true })}
        />
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="surname">
            Surname
          </label>
          {errors.surname && (
            <p className="form__error-msg" role="error-message">
              Incorrect surname
            </p>
          )}
        </div>
        <input
          className="form__input"
          type="text"
          placeholder="Your surname..."
          {...register('surname', { required: true })}
        />
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="date">
            Date of birth
          </label>
          {errors.date && (
            <p className="form__error-msg" role="error-message">
              Please enter date
            </p>
          )}
        </div>
        <input
          className="form__input"
          type="date"
          role="date"
          {...register('date', { required: true })}
        />
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="country">
            Country
          </label>
        </div>
        <select className="form__input" role="country" {...register('country')}>
          {COUNTRIES.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <fieldset id="gender">
          <legend className="form__label">Your gender</legend>
          <div className="form__input-wrapper">
            <input
              type="radio"
              value="male"
              role="gender"
              {...register('gender', { required: true })}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form__input-wrapper">
            <input type="radio" value="female" {...register('gender', { required: true })} />
            <label htmlFor="female">Female</label>
          </div>
          {errors.gender && (
            <p className="form__error-msg" role="error-message">
              The gender field is required
            </p>
          )}
        </fieldset>
        <label className="form__label" htmlFor="file">
          Choose a profile picture:
        </label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          role="file"
          {...register('file', { required: true })}
        />
        {errors.file && (
          <p className="form__error-msg" role="error-message">
            This field is required
          </p>
        )}
        <label className="form__label">
          <input type="checkbox" role="checkbox" {...register('checkbox', { required: true })} />I
          consent to my personal data
        </label>
        {errors.checkbox && (
          <p className="form__error-msg" role="error-message">
            This checkbox is required
          </p>
        )}
        <button
          className="button"
          type="submit"
          disabled={!!Object.keys(errors).length || !isDirty}
          role="submit-button"
        >
          Submit
        </button>
      </form>
      <p hidden={!save} className="form__title">
        Creating the card...
      </p>
    </div>
  );
}
