/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentPage } from '@Actions/index';
import './Profile.css';

class Profile extends Component {
  componentDidMount() {
    const { props } = this;
    props.setCurrentPage('profile');
  }

  render() {
    const { props } = this;
    return (
      <main className="Profile row-alt">
        <p className="container">Welcome, {props.currentUser.firstName}</p>
      </main>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(
  mapStateToProps,
  { setCurrentPage }
)(Profile);
