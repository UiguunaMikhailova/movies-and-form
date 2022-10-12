import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <nav>
          <ul className='header__list'>
            <li className='header__item'>
              <NavLink to='/' className='link' end>Home</NavLink>
            </li>
            <li className='header__item'>
              <NavLink to='/about' className='link'>About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
