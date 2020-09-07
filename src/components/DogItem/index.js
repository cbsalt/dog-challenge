import React from 'react';
import Loader from 'react-loader-spinner';

import { Container, CardContent, ItemWrapper } from './styled';

function DogItem({ breedsImage, breed, loadImage }) {
  return (
    <Container>
      <div>
        <span>{breed ? `Raça escolhida: ${breed}` : `Raça escolhida`}</span>
        <p>Nome</p>
      </div>
      <CardContent selected={breedsImage}>
        {loadImage ? (
          <Loader type="Oval" color="#3cb371" height={96} width={96} />
        ) : (
          <img src={breedsImage} alt={breed} />
        )}
      </CardContent>
      <ItemWrapper>
        <p>Cor: </p>
        <p>Sexo: </p>
        <p>Idade: </p>
      </ItemWrapper>
    </Container>
  );
}

export default DogItem;
