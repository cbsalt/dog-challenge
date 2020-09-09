/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const selectBreedAdapter = ({ breeds, input, inputOnChange }) => {
  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      inputOnChange && inputOnChange(e);
    },
  };

  return (
    <select {...inputProps}>
      <option value="selectbreed" disabled>
        Selecione uma raça
      </option>
      {breeds.map((breed) => (
        <option value={breed.breed} key={breed.breed}>
          {breed.breed}
        </option>
      ))}
    </select>
  );
};

export default selectBreedAdapter;
