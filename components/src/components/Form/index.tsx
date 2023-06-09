import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { formSlice } from 'store/reducers/FormSlice';
import { COUNTRIES } from 'Constants';
import { CardForm, FormInputs } from 'types';
import './Form.css';

export default function Form() {
  const { isSavingForm, formName, formSurname, formDate, formGender, formCountry, formCheckbox } =
    useAppSelector((state) => state.FormSlice);

  const dispatch = useAppDispatch();
  const { setFormInputs, toggleIsSaveForm, addFormCard, resetFormInputs } = formSlice.actions;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<FormInputs>({ mode: 'onChange' });

  useEffect(() => {
    watch((value) => {
      const { name, surname, date, country, gender, checkbox } = value;
      dispatch(setFormInputs({ name, surname, date, country, gender, checkbox } as FormInputs));
    });
  }, [watch]);

  const onSubmit = (data: FormInputs) => {
    updateCards({
      name: data.name,
      surname: data.surname,
      date: data.date,
      country: data.country,
      file: URL.createObjectURL(data.file![0]),
      gender: data.gender,
    });
    reset();
    setValue('checkbox', false);
  };

  function updateCards(card: CardForm) {
    dispatch(toggleIsSaveForm(true));
    setTimeout(() => {
      dispatch(toggleIsSaveForm(false));
      dispatch(addFormCard(card));
      dispatch(resetFormInputs());
    }, 1000);
  }

  return (
    <div className="form-wrapper" role="form">
      <h3 className="form__title" id="form__title">
        Create personal card
      </h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          {errors.name && <p className="form__error-msg">Incorrect name</p>}
        </div>
        <input
          className="form__input"
          type="text"
          placeholder="Your name..."
          value={formName}
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
          value={formSurname}
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
          value={formDate}
          {...register('date', { required: true })}
        />
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="country">
            Country
          </label>
        </div>
        <select className="form__input" role="country" value={formCountry} {...register('country')}>
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
              checked={formGender === 'male'}
              {...register('gender', { required: true })}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form__input-wrapper">
            <input
              type="radio"
              value="female"
              checked={formGender === 'female'}
              {...register('gender', { required: true })}
            />
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
          <input
            type="checkbox"
            role="checkbox"
            checked={formCheckbox}
            {...register('checkbox', { required: true })}
          />
          I consent to my personal data
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
      <p hidden={!isSavingForm} className="form__title">
        Creating the card...
      </p>
    </div>
  );
}
