/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '@Actions/index';

class Logout extends Component {
  componentDidMount() {
    const { props } = this;
    props.logout();
    props.history.replace('/');
  }

  render() {
    return null;
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(
  null,
  { logout }
)(Logout);
