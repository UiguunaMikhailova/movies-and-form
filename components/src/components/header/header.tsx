import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <nav>
          <ul className='header__list'>
            <li className='header__item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='header__item'>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
