import React, { useEffect, useState, useCallback } from 'react';
import api from '../services/api';

import DogItem from '../components/DogItem';
import DogForm from '../components/DogForm';

import { Container } from './styled';

export default function Home() {
  const [dogBreed, setDogBreed] = useState('');
  const [subBreed, setSubBreed] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [subBreeds, setSubBreeds] = useState([]);
  const [breedsImage, setBreedsImage] = useState('');
  const [loadImage, setLoadImage] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('breeds/list/all');

      const { message } = response.data;

      const listBreeds = Object.entries(message).reduce(
        (arrBreeds, [breed, subbreeds]) => {
          arrBreeds.push({
            breed,
            subbreeds: subbreeds.length > 0 ? subbreeds : [],
          });

          return arrBreeds;
        },
        []
      );
      setBreeds(listBreeds);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchImage() {
      setLoadImage(true);

      const response = await api.get(
        `breed/${dogBreed}${subBreed}/images/random`
      );

      const { message } = response.data;

      setBreedsImage(message);
      setLoadImage(false);
    }
    if (dogBreed) fetchImage();
  }, [dogBreed, subBreed]);

  const handleSelectBreed = useCallback(
    (e) => {
      const selectedBreed = breeds.filter(
        (breed) => breed.breed === e.target.value
      );
      setDogBreed(e.target.value);
      setSubBreeds(selectedBreed[0].subbreeds);
      setSubBreed('');
    },
    [breeds]
  );

  const handleSelectSubbreed = useCallback((e) => {
    setSubBreed(`/${e.target.value}`);
  }, []);

  return (
    <Container>
      <DogForm
        breeds={breeds}
        handleSelectBreed={handleSelectBreed}
        handleSelectSubbreed={handleSelectSubbreed}
        subbreeds={subBreeds}
      />
      <DogItem
        breedsImage={breedsImage}
        breed={dogBreed}
        loadImage={loadImage}
      />
    </Container>
  );
}
