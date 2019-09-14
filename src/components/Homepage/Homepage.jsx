import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setCurrentPage } from '@Actions/index';
import './Homepage.css';

class Homepage extends Component {
  componentDidMount() {
    const { props } = this;
    props.setCurrentPage('home');
  }

  render() {
    return (
      <main className="Homepage">
        <section className="Homepage__hero">
          <div className="Homepage__hero__inner container">
            <h1 className="Homepage__hero__title">
              A light-weight core banking application
            </h1>
            <p className="Homepage__hero__text--lg">
              Tried many banking app? Banka offers the solution.
            </p>

            <span className="Homepage__cta">
              <Link to="/signup" className="btn Homepage__cta__btn">
                Experience Banka!
              </Link>
            </span>
          </div>
        </section>
      </main>
    );
  }
}

Homepage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default connect(
  null,
  { setCurrentPage }
)(Homepage);
