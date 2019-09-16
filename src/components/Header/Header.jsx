/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentUser } from '@Actions/index';
import SampleUserAvatar from '@Assets/images/sample-user-avatar.png';
import './Header.css';

class Header extends Component {
  componentDidMount() {
    const { props } = this;
    props.getCurrentUser();
  }

  setHeaderInnerClass = () => {
    const defaultValue = 'container Header__inner';
    const { props } = this;
    return props.currentPage === 'home'
      ? `${defaultValue} Header__inner--homepage`
      : defaultValue;
  };

  setNavLinkClass = (linkLabel) => {
    const defaultValue = '';
    const { props } = this;
    return props.currentPage === linkLabel.toLowerCase()
      ? 'current-page-link'
      : defaultValue;
  };

  render() {
    const { props } = this;
    const isUserAuthenticated = Object.keys(props.currentUser).length > 0;

    return (
      <header className="Header">
        <div className={this.setHeaderInnerClass()}>
          <Link
            to={isUserAuthenticated ? '/profile' : '/'}
            className="Header__logo"
          >
            Banka
          </Link>

          <nav className="Header__nav">
            <ul className="Header__nav__list">
              {isUserAuthenticated ? (
                <>
                  <li className="Header__nav__item">
                    <Link to="/logout">Log Out</Link>
                  </li>
                  <li className="Header__nav__item">
                    <div className="Header__user__avatar">
                      <img
                        src={SampleUserAvatar}
                        alt="User Avatar"
                        title={props.currentUser.firstName}
                      />
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="Header__nav__item">
                    <Link
                      to="/signup"
                      className={this.setNavLinkClass('signup')}
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li className="Header__nav__item">
                    <Link to="/login" className={this.setNavLinkClass('login')}>
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentPage, currentUser }) => ({
  currentPage,
  currentUser,
});

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Header);
