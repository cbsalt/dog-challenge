/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const selectSubbreedAdapter = ({ subbreeds, input, inputOnChange }) => {
  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      return inputOnChange && inputOnChange(e);
    },
  };

  return (
    <select {...inputProps}>
      <option value="0" hidden>
        Selecione uma sub-raça
      </option>
      {subbreeds.map((subbreed) => (
        <option value={subbreed} key={subbreed}>
          {subbreed}
        </option>
      ))}
    </select>
  );
};

export default selectSubbreedAdapter;

selectSubbreedAdapter.propTypes = {
  subbreeds: PropTypes.instanceOf(Array).isRequired,
  input: PropTypes.instanceOf(Object).isRequired,
  inputOnChange: PropTypes.func.isRequired,
};
