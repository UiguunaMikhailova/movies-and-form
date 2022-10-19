import React, { Component } from 'react';
import './CardList.css';
import Card from 'Components/Card';

type CardProps = {
  key?: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
};

type CardListProps = {
  cards: CardProps[];
  isLoading: boolean;
};

export default class CardList extends Component<CardListProps> {
  render() {
    return (
      <div role="cardList">
        {this.props.isLoading ? (
          <div className="loading">Loading</div>
        ) : this.props.cards.length ? (
          <div>
            <ul className="films">
              {this.props.cards.map((item: CardProps, index) => (
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
          <div>Sorry, no movies were found by the request</div>
        )}
      </div>
    );
  }
}
