import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { Container, CardContent, ItemWrapper } from './styled';

function DogItem({ breedsImage, breed, loadImage, favoriteSize }) {
  return (
    <Container>
      <div>
        <h2>{breed ? `Raça escolhida: ${breed}` : `Raça escolhida`}</h2>
        <span>Nome</span>
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

export default connect((state) => ({
  favoriteSize: state.favorite.length,
}))(DogItem);
