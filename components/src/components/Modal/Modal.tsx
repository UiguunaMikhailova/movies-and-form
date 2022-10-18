import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  render() {
    return (
      <>
        <div className="overlay active"></div>
        <div className="overlay-popup"></div>
        <div className="modal">
          <div className="modal__close">jh</div>
          <div className="modal__card">
            <div className="modal__image">
              <img src="" alt="pet-image" />
            </div>
            <div className="modal__content">
              <div className="modal__title">jhgfd</div>
              <div className="modal__subtitle">hgfd</div>
              <div className="modal__info"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
