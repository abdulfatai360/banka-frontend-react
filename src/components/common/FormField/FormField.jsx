import React from 'react';
import PropTypes from 'prop-types';
import './FormField.css';

const FormField = ({ children, className, error }) => (
  <div className={className}>
    {children}
    {error && <span className="FormField__error">{error}</span>}
  </div>
);

FormField.defaultProps = {
  className: 'FormField',
  error: '',
};

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default FormField;
