import React, { Component } from 'react';
import COUNTRIES from 'Constants/countries';
import './Form.css';
import { FormProps } from 'types/types';

export default class Form extends Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  form: React.RefObject<HTMLFormElement> = React.createRef();
  name: React.RefObject<HTMLInputElement> = React.createRef();
  surname: React.RefObject<HTMLInputElement> = React.createRef();
  date: React.RefObject<HTMLInputElement> = React.createRef();
  country: React.RefObject<HTMLSelectElement> = React.createRef();
  genderMale: React.RefObject<HTMLInputElement> = React.createRef();
  genderFemale: React.RefObject<HTMLInputElement> = React.createRef();
  checkbox: React.RefObject<HTMLInputElement> = React.createRef();
  file: React.RefObject<HTMLInputElement> = React.createRef();

  state = {
    isSubmitted: false,
    isDisable: true,
  };

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.setState({ isSubmitted: true });
    if (
      this.name.current!.value &&
      this.surname.current!.value &&
      this.date.current!.value &&
      this.country.current!.value &&
      (this.genderMale.current!.value || this.genderMale.current!.value) &&
      this.checkbox.current!.checked &&
      this.file.current!.files![0]
    ) {
      this.props.updateCards(this.getNewCard());
      this.setState({ isSubmitted: false });
      this.form.current?.reset();
    }
    this.setState({ isDisable: true });
  }

  handleChange() {
    if (!this.state.isSubmitted) {
      this.setState({ isDisable: false });
    }
    if (
      (this.state.isSubmitted && !this.name.current!.value) ||
      (this.state.isSubmitted && !this.surname.current!.value) ||
      (this.state.isSubmitted && !this.date.current!.value) ||
      (this.state.isSubmitted && !this.checkbox.current!.checked) ||
      (this.state.isSubmitted && !this.file.current!.files![0]) ||
      (this.state.isSubmitted &&
        !this.genderFemale.current!.checked &&
        !this.genderMale.current!.checked)
    ) {
      this.setState({ isDisable: true });
    } else {
      this.setState({ isDisable: false });
    }
  }

  getNewCard() {
    return {
      name: this.name.current!.value,
      surname: this.surname.current!.value,
      date: this.date.current!.value,
      country: this.country.current!.value,
      gender: this.genderMale.current!.checked
        ? this.genderMale.current!.value
        : this.genderFemale.current!.value,
      file: URL.createObjectURL(this.file.current!.files![0]),
    };
  }

  render() {
    return (
      <div className="sign-in" role="form">
        <h3 className="form__title" id="form__title">
          Create personal card
        </h3>
        <form className="sign-in__form form" ref={this.form} onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            {!this.name.current?.value && this.state.isSubmitted && (
              <p className="form__error-msg" role="error-message">
                Incorrect name
              </p>
            )}
          </div>
          <input
            className="form__input"
            type="text"
            placeholder="Your name..."
            name="name"
            ref={this.name}
            onChange={this.handleChange}
          />
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="surname">
              Surname
            </label>
            {!this.surname.current?.value && this.state.isSubmitted && (
              <p className="form__error-msg" role="error-message">
                Incorrect surname
              </p>
            )}
          </div>
          <input
            className="form__input"
            type="text"
            placeholder="Your surname..."
            name="surname"
            ref={this.surname}
            onChange={this.handleChange}
          />
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="date">
              Date of birth
            </label>
            {!this.date.current?.value && this.state.isSubmitted && (
              <p className="form__error-msg" role="error-message">
                Please enter date
              </p>
            )}
          </div>
          <input
            className="form__input"
            type="date"
            name="date"
            role="date"
            ref={this.date}
            onChange={this.handleChange}
          />
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="country">
              Country
            </label>
            {!this.country.current?.value && this.state.isSubmitted && (
              <p className="form__error-msg" role="error-message">
                Please enter country
              </p>
            )}
          </div>
          <select
            className="form__input"
            role="country"
            ref={this.country}
            onChange={this.handleChange}
          >
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
                name="gender"
                value="male"
                role="gender"
                ref={this.genderMale}
                onChange={this.handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="form__input-wrapper">
              <input
                type="radio"
                name="gender"
                value="female"
                ref={this.genderFemale}
                onChange={this.handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
            {!this.genderMale.current?.checked &&
              this.state.isSubmitted &&
              !this.genderFemale.current?.checked && (
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
            name="file"
            accept="image/png, image/jpeg"
            role="file"
            ref={this.file}
            onChange={this.handleChange}
          />
          {!this.file.current?.files![0] && this.state.isSubmitted && (
            <p className="form__error-msg" role="error-message">
              This field is required
            </p>
          )}
          <label className="form__label">
            <input
              type="checkbox"
              role="checkbox"
              ref={this.checkbox}
              onChange={this.handleChange}
            />
            I consent to my personal data
          </label>
          {!this.checkbox.current?.checked && this.state.isSubmitted && (
            <p className="form__error-msg" role="error-message">
              This checkbox is required
            </p>
          )}
          <button
            className="button"
            type="submit"
            disabled={this.state.isDisable}
            role="submit-button"
          >
            Submit
          </button>
        </form>
        <p hidden={!this.props.save} className="form__title">
          Creating the card...
        </p>
      </div>
    );
  }
}
