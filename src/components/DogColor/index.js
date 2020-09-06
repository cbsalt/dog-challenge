import React from 'react';
import { FaDog } from 'react-icons/fa';

const DogColor = ({ color, name, handleColor }) => (
  <FaDog size={40} onClick={() => handleColor(name)} color={color} />
);

export default DogColor;
