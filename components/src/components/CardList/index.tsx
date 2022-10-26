import React, { useContext } from 'react';
import Card from 'Components/Card';
import { CardProps } from 'types';
import './CardList.css';
import { CardsContext } from 'App';

export default function CardList() {
  const cardsContext = useContext(CardsContext);
  const { cards, isLoading } = cardsContext.state;
  return (
    <div role="cardList">
      {isLoading ? (
        <div className="loading">Loading</div>
      ) : cards.length ? (
        <div>
          <ul className="films">
            {cards.map((item: CardProps, index) => (
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
