import Card from 'Components/Card/Card';
import React, { Component } from 'react';
import { getData } from 'Requests/Requests';
import './CardList.css';

const apiKey = '0d5da78d3ffd7f7454f49e8eb45260f5';
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

type CardProps = {
  key: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
};

export default class CardList extends Component {
  state = {
    cards: [],
  };
  componentDidMount(): void {
    getData(url).then((data) => {
      this.setState({ cards: data.results });
    });
  }
  render() {
    return (
      <div>
        <ul className="films">
          {this.state.cards.map((item: CardProps, index) => (
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
    );
  }
}
