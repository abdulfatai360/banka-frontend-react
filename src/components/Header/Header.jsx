import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  state = {};

  render() {
    return (
      <header className="Header">
        <div className="Header__inner container">
          <Link to="/" className="Header__logo">
            Banka
          </Link>

          <nav className="Header__nav">
            <ul className="Header__nav__list">
              <li className="Header__nav__item">
                <Link to="/login">Login</Link>
              </li>
              <li className="Header__nav__item">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
