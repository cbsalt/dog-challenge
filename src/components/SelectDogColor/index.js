/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const selectColorAdapter = ({ color, input, inputOnChange }) => {
  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      return inputOnChange && inputOnChange(e);
    },
  };

  return <input id={color} {...inputProps} />;
};

export default selectColorAdapter;

selectColorAdapter.propTypes = {
  color: PropTypes.string.isRequired,
  input: PropTypes.instanceOf(Object).isRequired,
  inputOnChange: PropTypes.bool,
};

selectColorAdapter.defaultProps = {
  inputOnChange: false,
};
