import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import { Container, CardContent, ItemWrapper } from './styled';

function DogItem({ breedsImage, breed, loadImage, values, price }) {
  return (
    <Container>
      <div>
        <h2>
          {breed ? `Raça escolhida: ${breed}` : `Aguardando suas escolhas`}
        </h2>
        <span>{values.dogname}</span>
      </div>
      <CardContent selected={breedsImage}>
        {loadImage ? (
          <Loader type="Oval" color="#3cb371" height={96} width={96} />
        ) : (
          <img src={breedsImage} alt={breed} />
        )}
      </CardContent>
      <ItemWrapper show={Object.keys(values).length}>
        <strong>Cor: {values.selectcolor} </strong>
        <strong>Sexo: {values.selectgender} </strong>
        <strong>Idade: {values.selectage} </strong>
        <strong>Valor: {price}</strong>
      </ItemWrapper>
    </Container>
  );
}

export default DogItem;

DogItem.propTypes = {
  breedsImage: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  loadImage: PropTypes.bool.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
  price: PropTypes.number.isRequired,
};
