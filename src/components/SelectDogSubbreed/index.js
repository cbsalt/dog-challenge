/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const selectSubbreedAdapter = ({ subbreeds, input, inputOnChange }) => {
  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      inputOnChange && inputOnChange(e);
    },
  };

  return (
    <select {...inputProps}>
      <option value="0">Selecione uma sub-raça</option>
      {subbreeds.map((subbreed) => (
        <option value={subbreed} key={subbreed}>
          {subbreed}
        </option>
      ))}
    </select>
  );
};

export default selectSubbreedAdapter;
