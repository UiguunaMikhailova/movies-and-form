import React from 'react';
import Card from 'Components/Card';
import { useAppSelector } from 'hooks/redux';
import { CardProps } from 'types';
import { errorMessage } from 'Constants';
import './CardList.css';

export default function CardList() {
  const { movies, isLoading, error } = useAppSelector((state) => state.MovieSlice);

  return (
    <div role="cardList">
      {isLoading && <div className="loading">Loading</div>}
      {error && <div className="info">{errorMessage}</div>}
      {movies.length ? (
        <div>
          <ul className="films">
            {movies.map((item: CardProps, index: number) => (
              <Card
                key={index}
                id={index}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                vote_count={item.vote_count}
                overview={item.overview}
              />
            ))}
          </ul>
        </div>
      ) : error ? (
        <></>
      ) : (
        <div className="info">Sorry, no movies were found by the request</div>
      )}
    </div>
  );
}
