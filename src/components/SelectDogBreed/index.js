/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const selectBreedAdapter = ({ breeds, input, inputOnChange }) => {
  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      return inputOnChange && inputOnChange(e);
    },
  };

  return (
    <select {...inputProps}>
      <option value="0">Selecione uma raça</option>
      {breeds.map((breed) => (
        <option value={breed.breed} key={breed.breed}>
          {breed.breed}
        </option>
      ))}
    </select>
  );
};

export default selectBreedAdapter;

selectBreedAdapter.propTypes = {
  breeds: PropTypes.instanceOf(Array).isRequired,
  input: PropTypes.instanceOf(Object).isRequired,
  inputOnChange: PropTypes.func.isRequired,
};
