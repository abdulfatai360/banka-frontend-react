/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import './InputElement.css';

const InputElement = ({
  className,
  disabled,
  name,
  placeholder,
  type,
  value,
  onChange,
  onFocus,
}) => (
  <input
    className={className}
    disabled={disabled}
    id={name}
    name={name}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
    onFocus={onFocus}
  />
);

InputElement.defaultProps = {
  className: 'InputElement',
  disabled: false,
  type: 'text',
  onFocus: () => {},
};

InputElement.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
};

export default InputElement;
