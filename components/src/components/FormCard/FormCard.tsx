import React, { Component } from 'react';
import { CardForm } from 'types/types';
import './FormCard.css';

export default class FormCard extends Component<CardForm> {
  render() {
    return (
      <li className="form-card" role="form-card">
        <div className="picture-wrapper">
          <img className="form-card__picture" src={this.props.file} alt="personal-card-picture" />
        </div>
        <div>
          <div className="form-card__title">Name: {this.props.name}</div>
          <div className="form-card__title">Surname: {this.props.surname}</div>
          <div className="form-card__title">Date: {this.props.date}</div>
          <div className="form-card__title">Country: {this.props.country}</div>
          <div className="form-card__title">Gender: {this.props.gender}</div>
        </div>
      </li>
    );
  }
}
