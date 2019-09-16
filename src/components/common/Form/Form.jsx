import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ children, className, error, onSubmit }) => (
  <form className={className} onSubmit={onSubmit}>
    {error && <p className="Form__error">{error}</p>}
    {children}
  </form>
);

Form.defaultProps = {
  error: '',
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
