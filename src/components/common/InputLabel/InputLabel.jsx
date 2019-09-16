/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import './InputLabel.css';

const InputLabel = ({ htmlFor, label, required }) => (
  <label htmlFor={htmlFor} className="InputLabel">
    {label} {required && <abbr title="required">*</abbr>}
  </label>
);

InputLabel.defaultProps = {
  required: false,
};

InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputLabel;
