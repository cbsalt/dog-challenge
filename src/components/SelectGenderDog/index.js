/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const FormGenderAdapter = ({ input, inputOnChange }) => {
  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      inputOnChange && inputOnChange(e);
    },
  };

  return (
    <select {...inputProps}>
      <option value="selecione o sexo">Selecione o sexo do doguinho</option>
      <option value="macho">Macho</option>
      <option value="fêmea">Fêmea</option>
    </select>
  );
};

export default FormGenderAdapter;
