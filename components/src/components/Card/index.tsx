import Modal from 'Components/Modal/Modal';
import React, { useState } from 'react';
import { CardProps } from 'types/types';
import './Card.css';

export default function Card({ title, poster_path, vote_average, overview }: CardProps) {
  const [isModal, setIsModal] = useState(false);
  function showModal() {
    setIsModal(true);
  }
  function closeModal() {
    setIsModal(false);
  }
  return (
    <div>
      {isModal ? (
        <Modal
          title={title}
          poster_path={poster_path}
          vote_average={vote_average}
          overview={overview}
          closeModal={closeModal}
        />
      ) : (
        <li className="movie" role="card" onClick={() => showModal()}>
          <div className="picture-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className="picture"
            />
          </div>
          <div className="movie-title-wrapper">
            <div className="movie-title">{title}</div>
            <div className="movie-rating">{vote_average}</div>
          </div>
          <div className="overwiew-wrapper">
            <div className="overwiew-title">Overwiew</div>
            <div className="overwiew-text">{overview}</div>
          </div>
        </li>
      )}
    </div>
  );
}
