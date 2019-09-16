/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ className, disabled, label, name, title, onClick }) => (
  <button
    className={className}
    disabled={disabled}
    id={name}
    name={name}
    title={title}
    type="submit"
    onClick={onClick}
  >
    {label}
  </button>
);

Button.defaultProps = {
  disabled: false,
  name: '',
  title: '',
  onClick: () => {},
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.any.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
