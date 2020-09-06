import React, { useState, useCallback } from 'react';
import { MdFavorite } from 'react-icons/md';

import DogColor from '../DogColor';
import colorDogs from '../DogColor/content';

import {
  Container,
  FormSearch,
  FormInput,
  FavButton,
  IconWrapper,
} from './styled';

function DogForm({
  breeds,
  handleSelectBreed,
  handleSelectSubbreed,
  subbreeds,
}) {
  const [color, setColor] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [selectedGender, setSelectedGender] = useState(0);

  const handleColor = useCallback((colorSelected) => {
    setColor(colorSelected);
  }, []);

  const handleGender = (e) => {
    setGender(e.target.value);

    if (e.target.value === 'fêmea') {
      setSelectedGender(3 * 5);
    } else {
      setSelectedGender(5);
    }
  };

  return (
    <Container>
      <div>
        <span>Escolha seu novo amigo</span>
      </div>
      <FormSearch>
        <FormInput>
          <input
            type="text"
            name="dogname"
            placeholder="Digite aqui o nome do seu novo doguinho"
          />
          <select
            name="selectbreed"
            onChange={handleSelectBreed}
            defaultValue="breed"
          >
            <option value="breed" disabled>
              Selecione uma raça
            </option>
            {breeds.map((breed) => (
              <option value={breed.breed} key={breed.breed}>
                {breed.breed}
              </option>
            ))}
          </select>
          <select
            name="selectsubbreed"
            onChange={handleSelectSubbreed}
            defaultValue="subbreed"
          >
            <option value="subbreed" disabled>
              Selecione uma sub-raça
            </option>
            {subbreeds.map((subbreed) => (
              <option value={subbreed} key={subbreed}>
                {subbreed}
              </option>
            ))}
          </select>
          <div>
            <p>Selecione a cor</p>
            <div>
              {colorDogs.map((colorDog, i) => {
                return (
                  <IconWrapper key={i}>
                    <DogColor
                      handleColor={handleColor}
                      color={colorDog.color}
                      name={colorDog.name}
                    />
                  </IconWrapper>
                );
              })}
            </div>
          </div>
          <p>Cor selecionada: {color}</p>
          <select
            name="select"
            onChange={handleGender}
            defaultValue="selectgender"
          >
            <option value="selectgender" disabled>
              Selecione o sexo
            </option>
            <option value="macho">Macho</option>
            <option value="fêmea">Fêmea</option>
          </select>
          <p>
            {selectedGender ? (
              <p>
                Valor adicional para {gender} é {selectedGender}
              </p>
            ) : (
              <p>Valor adicional</p>
            )}
          </p>
          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="Digite a idade buscada"
          />
          <FavButton>
            <div>
              <button type="button">
                <MdFavorite size={20} color="#fff" />
                <span>Reserve seu amigo</span>
              </button>
            </div>
          </FavButton>
        </FormInput>
      </FormSearch>
    </Container>
  );
}

export default DogForm;
