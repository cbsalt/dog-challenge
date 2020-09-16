import React, { useEffect, useState, useCallback } from 'react';
import { Form } from 'react-final-form';
import { toast } from 'react-toastify';

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
  const [priceByGender, setPriceByGender] = useState(0);
  const [dogList, setDogList] = useState(() => {
    const dogListStorage = localStorage.getItem('@app:dog');

    if (dogListStorage) {
      return JSON.parse(dogListStorage);
    }

    return [];
  });

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
      const { value } = e.target;

      if (value === '0') return;

      const selectedBreed = breeds.filter((breed) => breed.breed === value);

      setDogBreed(value);
      setSubBreeds(selectedBreed[0].subbreeds);
      setSubBreed('');
    },
    [breeds]
  );

  const handleSelectSubbreed = useCallback((e) => {
    const { value } = e.target;

    if (value === '0') return;
    setSubBreed(`/${e.target.value}`);
  }, []);

  const handleGenderChange = useCallback((e) => {
    const { value } = e.target;

    if (value === '0') return;
    const genderPrice = {
      macho: 7,
      fêmea: 15,
    };
    setPriceByGender(genderPrice[e.target.value]);
  }, []);

  const onSubmit = async (values) => {
    try {
      const dataForm = {
        ...values,
        priceByGender,
      };

      const newDogList = [...dogList, dataForm];

      localStorage.setItem('@app:dog', JSON.stringify(newDogList));
      localStorage.setItem('@app:dog:values', JSON.stringify(values));

      setDogList(newDogList);

      toast.success('Seu amigo foi reservado com sucesso!');
    } catch (err) {
      toast.error('Erro ao reservar seu amigo, tente novamente!');
    }
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        mutators={{
          setSubBreedForm: (args, state, tools) => {
            tools.changeValue(state, 'selectsubbreed', () => null);
          },
        }}
        render={({ form, handleSubmit, values }) => (
          <>
            <DogForm
              dogList={dogList}
              form={form}
              breeds={breeds}
              subbreeds={subBreeds}
              handleSelectBreed={handleSelectBreed}
              handleSelectSubbreed={handleSelectSubbreed}
              handleGenderChange={handleGenderChange}
              handleSubmit={handleSubmit}
            />

            <DogItem
              breed={dogBreed}
              breedsImage={breedsImage}
              loadImage={loadImage}
              values={values}
              price={priceByGender}
            />
          </>
        )}
      />
    </Container>
  );
}
