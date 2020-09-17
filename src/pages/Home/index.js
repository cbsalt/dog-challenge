import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Form, FormSpy } from 'react-final-form';
import { toast } from 'react-toastify';

import api from '../../services/api';

import DogItem from '../../components/DogItem';
import DogForm from '../../components/DogForm';

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
  const [valuesForm] = useState(() => {
    const valuesFormStorage = localStorage.getItem('@app:dog:values');

    if (valuesFormStorage) {
      return JSON.parse(valuesFormStorage);
    }

    return {};
  });

  const fetchData = async () => {
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
  };

  const onSubmit = async (values) => {
    try {
      const dataForm = {
        ...values,
        priceByGender,
      };

      const newDogList = [...dogList, dataForm];

      localStorage.setItem('@app:dog', JSON.stringify(newDogList));

      setDogList(newDogList);

      toast.success('Seu amigo foi reservado com sucesso!');
    } catch (err) {
      toast.error('Erro ao reservar seu amigo, tente novamente!');
    }
  };

  const handleSelectBreed = useCallback(
    (event) => {
      const value = (event.target && event.target.value) || event || '0';

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

  const handleChangeValuesForm = useCallback((props) => {
    const { values } = props;
    localStorage.setItem('@app:dog:values', JSON.stringify(values));
  }, []);

  useEffect(() => {
    fetchData();
  }, [valuesForm]);

  useEffect(() => {
    if (breeds.length > 0 && valuesForm.selectbreed) {
      handleSelectBreed(valuesForm.selectbreed);
    }
  }, [handleSelectBreed, breeds, valuesForm]);

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

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        initialValues={valuesForm}
        mutators={{
          setSubBreedForm: (args, state, tools) => {
            tools.changeValue(state, 'selectsubbreed', () => null);
          },
        }}
        render={({ form, handleSubmit, values, reset }) => (
          <>
            <FormSpy
              subscription={{ values: true }}
              onChange={handleChangeValuesForm}
            />
            <DogForm
              dogList={dogList}
              form={form}
              reset={reset}
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

Home.defaultProps = {
  values: {
    dogname: '',
    selectcolor: '',
    selectbreed: '',
    selectgender: '',
    selectsubbreed: '',
    selectage: '',
  },
};

Home.propTypes = {
  values: PropTypes.shape({
    dogname: PropTypes.string,
    selectcolor: PropTypes.string,
    selectbreed: PropTypes.string,
    selectgender: PropTypes.string,
    selectsubbreed: PropTypes.string,
    selectage: PropTypes.string,
  }),
};
