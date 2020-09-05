import React, { useState, useCallback } from 'react';
import { MdFavorite } from 'react-icons/md';

import DogColor from '../DogColor';

import { Container, FormSearch, FormInput, FavButton } from './styled';

function DogForm({
  breeds,
  handleSelectBreed,
  handleSelectSubbreed,
  subbreeds,
}) {
  const [color, setColor] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleColor = useCallback((colorSelected) => {
    setColor(colorSelected);
  }, []);

  const handleGender = (e) => {
    setGender(e.target.value);
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
            <p>Selecione a cor desejada</p>
            <DogColor color="#000000" name="Preto" handleColor={handleColor} />
            <DogColor color="#7B3F00" name="Marrom" handleColor={handleColor} />
            <DogColor
              color="#fb3c1a"
              name="Vermelho"
              handleColor={handleColor}
            />
            <DogColor
              color="#e1ad01"
              name="Dourado"
              handleColor={handleColor}
            />
            <DogColor
              color="#ffd700"
              name="Amarelo"
              handleColor={handleColor}
            />
            <DogColor color="#FFFDD0" name="Creme" handleColor={handleColor} />
            <DogColor
              color="#cccccc"
              name="Cinzento"
              handleColor={handleColor}
            />
          </div>
          {color}
          <select
            name="select"
            onChange={handleGender}
            defaultValue="selectgender"
          >
            <option value="selectgender" disabled>
              Selecione o sexo
            </option>
            <option value="male">Macho</option>
            <option value="female">Fêmea</option>
          </select>

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
