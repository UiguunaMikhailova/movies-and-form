import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'hooks/redux';
import { movieDefaultPoster } from 'Constants';
import './CardElement.css';

export default function CardElement() {
  const { movies } = useAppSelector((state) => state.MovieSlice);
  const { id } = useParams();
  const navigate = useNavigate();
  const card = movies[Number(id)];

  return (
    <>
      {card ? (
        <div className="modal">
          <div className="modal__card">
            <div className="modal__image">
              <img
                src={
                  card.poster_path === null
                    ? movieDefaultPoster
                    : `https://image.tmdb.org/t/p/w500${card.poster_path}`
                }
                alt="poster"
              />
            </div>
            <div className="modal__content">
              <div className="modal__title">{card.title}</div>
              <div className="movie__rating-wrapper">
                <span className="movie__rating-text">
                  Raiting: <div className="movie__rating">{card.vote_average}</div>
                </span>
                <span className="movie__rating-text">
                  Vote count: <div className="movie__rating">{card.vote_count}</div>
                </span>
              </div>
              <div className="modal__overview">Overview: {card.overview}</div>
            </div>
          </div>
          <button className="button" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
