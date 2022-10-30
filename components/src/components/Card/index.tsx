import React, { useState } from 'react';
import Modal from 'Components/Modal';
import { CardProps } from 'types';
import './Card.css';

export default function Card({
  title,
  poster_path,
  vote_average,
  overview,
  vote_count,
}: CardProps) {
  const [isModal, setIsModal] = useState(false);

  function showModal() {
    setIsModal(true);
  }

  function closeModal(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    if (element.classList.contains('close')) {
      setIsModal(false);
    }
  }

  return (
    <div>
      {isModal ? (
        <Modal
          title={title}
          poster_path={poster_path}
          vote_average={vote_average}
          vote_count={vote_count}
          overview={overview}
          closeModal={closeModal}
        />
      ) : (
        <li className="movie" role="card" onClick={showModal}>
          <div className="movie__picture-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className="movie__picture"
            />
          </div>
          <div className="movie__title-wrapper">
            <div className="movie__title">{title}</div>
            <div className="movie__rating-wrapper">
              <span className="movie__rating-text">
                Raiting: <div className="movie__rating">{vote_average}</div>
              </span>
              <span className="movie__rating-text">
                Vote count: <div className="movie__rating">{vote_count}</div>
              </span>
            </div>
          </div>
        </li>
      )}
    </div>
  );
}
