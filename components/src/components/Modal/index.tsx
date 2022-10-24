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
  function notCloseModal(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div className="overlay" onClick={closeModal}>
      <div
        className="modal"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          notCloseModal(e);
        }}
      >
        <div className="modal__close" onClick={closeModal}>
          <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" />
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
