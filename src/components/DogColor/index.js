import React from 'react';

import { ButtonColor } from './styled';

const DogColor = ({ color, name, handleColor }) => (
  <ButtonColor onClick={() => handleColor(name)} background={color} />
);

export default DogColor;
