/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const FormGenderAdapter = ({ input, inputOnChange }) => {
  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      return inputOnChange && inputOnChange(e);
    },
  };

  return (
    <select {...inputProps}>
      <option value="selecione o sexo" hidden>
        Selecione o sexo do doguinho
      </option>
      <option value="macho">Macho</option>
      <option value="fêmea">Fêmea</option>
    </select>
  );
};

export default FormGenderAdapter;

FormGenderAdapter.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  inputOnChange: PropTypes.func.isRequired,
};
