import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'App';
import { movieDefaultPoster } from 'Constants';
import { CardProps } from 'types';
import './Card.css';

export default function Card({ id, title, poster_path, vote_average, vote_count }: CardProps) {
  const context = useContext(Context);
  const { page } = context.state;

  return (
    <Link to={`movies/page=${page}&id=${id}`} className="movie" role="card">
      <div className="movie__picture-wrapper">
        <img
          src={
            poster_path === null
              ? movieDefaultPoster
              : `https://image.tmdb.org/t/p/w500${poster_path}`
          }
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
    </Link>
  );
}
