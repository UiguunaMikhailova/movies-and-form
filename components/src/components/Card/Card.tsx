import React, { Component } from 'react';
import './Card.css';

type CardProps = {
  key: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
};

export default class Card extends Component<CardProps> {
  //   imgUrl = `https://api.themoviedb.org/${this.props.poster_path}`
  render() {
    return (
      <li key={this.props.key} className="movie">
        <div className="picture-wrapper">
          <img
            src={`https://api.themoviedb.org${this.props.poster_path}`}
            alt={this.props.title}
            className="picture"
          />
        </div>
        <div className="movie-title-wrapper">
          <div className="movie-title">{this.props.title}</div>
          <div className="movie-rating">{this.props.vote_average}</div>
        </div>
        <div className="overwiew-wrapper">
          <div className="overwiew-title">Overwiew</div>
          <div className="overwiew-text">{this.props.overview}</div>
        </div>
      </li>
    );
  }
}
