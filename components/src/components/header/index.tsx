import React, { Component } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header" role="header">
        <nav>
          <ul className="header__list">
            <li className="header__item">
              <NavLink to="/" className="link" end role="homeLink">
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/about" className="link" role="aboutLink">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
