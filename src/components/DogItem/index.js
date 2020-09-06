import React from 'react';
import Loader from 'react-loader-spinner';

import { Container, CardContent } from './styled';

function DogItem({ breedsImage, breed, loadImage }) {
  return (
    <Container>
      <span>{breed ? `Raça escolhida: ${breed}` : `Raça escolhida`}</span>
      <CardContent selected={breedsImage}>
        {loadImage ? (
          <Loader type="Oval" color="#3cb371" height={96} width={96} />
        ) : (
          <img src={breedsImage} alt={breed} />
        )}
      </CardContent>
    </Container>
  );
}

export default DogItem;
