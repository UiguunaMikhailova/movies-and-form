import React from 'react';
import { CardForm } from 'types/types';
import './FormCard.css';

export default function FormCard({ file, name, surname, date, country, gender }: CardForm) {
  return (
    <li className="form-card" role="form-card">
      <div className="picture-wrapper">
        <img className="form-card__picture" src={file} alt="personal-card-picture" />
      </div>
      <div>
        <div className="form-card__title">Name: {name}</div>
        <div className="form-card__title">Surname: {surname}</div>
        <div className="form-card__title">Date: {date}</div>
        <div className="form-card__title">Country: {country}</div>
        <div className="form-card__title">Gender: {gender}</div>
      </div>
    </li>
  );
}
