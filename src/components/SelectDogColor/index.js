/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const selectColorAdapter = ({ input, inputOnChange, color }) => {
  const inputProps = {
    ...input,
    onChange: (e) => {
      input.onChange(e);
      inputOnChange && inputOnChange(e);
    },
  };

  return <input id={color} {...inputProps}/>;
};

export default selectColorAdapter;
