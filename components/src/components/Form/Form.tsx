import React, { Component } from 'react';
import COUNTRIES from 'Constants/countries';
import './Form.css';
import { FormProps } from 'types/types';

export default class Form extends Component<FormProps> {
  name: React.RefObject<HTMLInputElement> = React.createRef();
  surname: React.RefObject<HTMLInputElement> = React.createRef();
  date: React.RefObject<HTMLInputElement> = React.createRef();
  country: React.RefObject<HTMLSelectElement> = React.createRef();
  genderMale: React.RefObject<HTMLInputElement> = React.createRef();
  genderFemale: React.RefObject<HTMLInputElement> = React.createRef();
  checkbox: React.RefObject<HTMLInputElement> = React.createRef();
  file: React.RefObject<HTMLInputElement> = React.createRef();
  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      this.name.current!.value &&
      this.surname.current!.value &&
      this.date.current!.value &&
      this.country.current!.value &&
      (this.genderMale.current!.value || this.genderMale.current!.value) &&
      this.checkbox.current!.checked &&
      this.file.current!.files![0]
    ) {
      const card = {
        name: this.name.current!.value,
        surname: this.surname.current!.value,
        date: this.date.current!.value,
        country: this.country.current!.value,
        gender: this.genderMale.current!.value || this.genderMale.current!.value,
        file: URL.createObjectURL(this.file.current!.files![0]),
      };
      this.props.updateCards(card);
    }
  }
  render() {
    return (
      <div className="sign-in">
        <h3 className="form__title" id="form__title">
          Create personal card
        </h3>
        <form className="sign-in__form form" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <p className="form__error-msg">Incorrect name</p>
          </div>
          <input
            className="form__input"
            type="text"
            placeholder="Your name..."
            name="name"
            ref={this.name}
          />
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="surname">
              Surname
            </label>
            <p className="form__error-msg">Incorrect surname</p>
          </div>
          <input
            className="form__input"
            type="text"
            placeholder="Your surname..."
            name="surname"
            ref={this.surname}
          />
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="date">
              Date of birth
            </label>
            <p className="form__error-msg">Incorrect date</p>
          </div>
          <input className="form__input" type="date" name="date" ref={this.date} />
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="country">
              Country
            </label>
            <p className="form__error-msg">Incorrect country</p>
          </div>
          <select className="form__input" ref={this.country}>
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
              <input type="radio" name="gender" value="male" ref={this.genderMale} />
              <label htmlFor="male">Male</label>
            </div>
            <div className="form__input-wrapper">
              <input type="radio" name="gender" value="female" ref={this.genderFemale} />
              <label htmlFor="female">Female</label>
            </div>
            <p className="form__error-msg">The gender field is required</p>
          </fieldset>
          <label className="form__label" htmlFor="file">
            Choose a profile picture:
          </label>
          <input type="file" name="file" accept="image/png, image/jpeg" ref={this.file} />
          <label className="form__label">
            <input type="checkbox" ref={this.checkbox} />I consent to my personal data
          </label>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        <div className="form__error-message" id="form__error">
          Пароль должен содержать не менее 8 символов, как минимум одну заглавную букву, одну
          прописную букву, одну цифру и один специальный символ +-_@$!%*?&amp;#.,;:[]{}]
        </div>
      </div>
    );
  }
}
