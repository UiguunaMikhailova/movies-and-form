import React, { useContext } from 'react';
import Card from 'Components/Card';
import { CardProps } from 'types';
import './CardList.css';
import { Context } from 'App';
import Pagination from 'Components/Pagination';

export default function CardList() {
  const context = useContext(Context);
  const { movies, isLoading } = context.state;

  return (
    <div role="cardList">
      {isLoading ? (
        <div className="loading">Loading</div>
      ) : movies.length ? (
        <div>
          <ul className="films">
            {movies.map((item: CardProps, index: number) => (
              <Card
                key={index}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="no-cards">Sorry, no movies were found by the request</div>
      )}
    </div>
  );
}
