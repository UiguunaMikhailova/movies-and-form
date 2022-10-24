import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
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
          <li className="header__item">
            <NavLink to="/form" className="link" role="form">
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
