import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentPage } from '@Actions/index';
import './NotFound.css';

class NotFound extends Component {
  componentDidMount() {
    const { props } = this;
    props.setCurrentPage('not-found');
  }

  render() {
    return (
      <main className="NotFound row">
        <div className="container">
          <div className="NotFound__status__code">404</div>
          <div className="NotFound__message">Sorry, page not found</div>
        </div>
      </main>
    );
  }
}

NotFound.propTypes = { setCurrentPage: PropTypes.func.isRequired };

export default connect(
  null,
  { setCurrentPage }
)(NotFound);
