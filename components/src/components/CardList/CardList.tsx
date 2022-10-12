import Card from 'Components/Card/Card';
import React, { Component } from 'react';
import './CardList.css';

// const apiKey = '0d5da78d3ffd7f7454f49e8eb45260f5';
// const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

type CardProps = {
  key: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  base_url: string;
};

type CardListProps = {
  cards: CardProps[];
  isLoading: boolean;
};

export default class CardList extends Component<CardListProps> {
  render() {
    return this.props.isLoading ? (
      <div>Loading</div>
    ) : this.props.cards.length ? (
      <div>
        <ul className="films">
          {this.props.cards.map((item: CardProps, index) => (
            <Card
              key={index}
              title={item.title}
              poster_path={item.poster_path}
              base_url={item.base_url}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          ))}
        </ul>
      </div>
    ) : (
      <div>No cards</div>
    );
  }
}
