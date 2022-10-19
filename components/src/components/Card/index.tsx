import Modal from 'Components/Modal/Modal';
import React, { Component } from 'react';
import { CardProps } from 'types/types';
import './Card.css';

export default class Card extends Component<CardProps> {
  state = {
    isModal: false,
  };
  showModal() {
    this.setState({ isModal: true });
  }
  closeModal() {
    this.setState({ isModal: false });
  }
  render() {
    return (
      <div>
        {this.state.isModal ? (
          <Modal
            title={this.props.title}
            poster_path={this.props.poster_path}
            vote_average={this.props.vote_average}
            overview={this.props.overview}
            closeModal={this.closeModal.bind(this)}
          />
        ) : (
          <li className="movie" role="card" onClick={() => this.showModal()}>
            <div className="picture-wrapper">
              <img
                src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`}
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
        )}
      </div>
    );
  }
}
