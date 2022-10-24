import React from 'react';
import { ModalProps } from 'types';
import './Modal.css';

export default function Modal({
  closeModal,
  title,
  poster_path,
  vote_average,
  overview,
}: ModalProps) {
  return (
    <div className="overlay close" onClick={(e) => closeModal(e)}>
      <div className="modal">
        <div className="modal__close close" onClick={(e) => closeModal(e)}>
          <img
            className="close"
            src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
          />
        </div>
        <div className="modal__card">
          <div className="modal__image">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" />
          </div>
          <div className="modal__content">
            <div className="modal__title">{title}</div>
            <div className="modal__subtitle">Raiting: {vote_average}</div>
            <div className="modal__subtitle">Overview: {overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
