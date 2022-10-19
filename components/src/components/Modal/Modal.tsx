import React, { Component } from 'react';
import { ModalProps } from 'types/types';
import './Modal.css';

export default class Modal extends Component<ModalProps> {
  notCloseModal(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }
  render() {
    return (
      <div className="overlay" onClick={this.props.closeModal}>
        <div
          className="modal"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            this.notCloseModal(e);
          }}
        >
          <div className="modal__close" onClick={this.props.closeModal}>
            <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" />
          </div>
          <div className="modal__card">
            <div className="modal__image">
              <img src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`} alt="poster" />
            </div>
            <div className="modal__content">
              <div className="modal__title">{this.props.title}</div>
              <div className="modal__subtitle">Raiting: {this.props.vote_average}</div>
              <div className="modal__subtitle">Overview: {this.props.overview}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
