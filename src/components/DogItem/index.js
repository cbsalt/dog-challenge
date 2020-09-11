import React from 'react';
import Loader from 'react-loader-spinner';

import { Container, CardContent, ItemWrapper } from './styled';

function DogItem({ breedsImage, breed, loadImage, values, price }) {
  return (
    <Container>
      <div>
        <h2>{breed ? `Raça escolhida: ${breed}` : `Raça escolhida`}</h2>
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
        <p>Cor: {values.selectcolor} </p>
        <p>Sexo: {values.selectgender} </p>
        <p>Idade: {values.selectage} </p>
        <p>Valor: {price}</p>
      </ItemWrapper>
    </Container>
  );
}

export default DogItem;
