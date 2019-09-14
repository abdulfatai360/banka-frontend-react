/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  setHeaderInnerClass = () => {
    const defaultValue = 'container Header__inner';
    const { props } = this;
    return props.currentPage === 'home'
      ? `${defaultValue} Header__inner--homepage`
      : defaultValue;
  };

  render() {
    return (
      <header className="Header">
        <div className={this.setHeaderInnerClass()}>
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

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = ({ currentPage }) => ({ currentPage });

export default connect(mapStateToProps)(Header);
