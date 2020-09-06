/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form, Field } from 'react-final-form';
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
          <Form
            onSubmit={(values) => {
              console.log({ values });
            }}
            initialValues={{
              dogname: '',
              breed: '',
              subbreed: '',
              color: '',
              gender: '',
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="dogname">
                  {({ input }) => (
                    <div>
                      <input
                        {...input}
                        placeholder="Digite aqui o nome do seu novo doguinho"
                      />
                    </div>
                  )}
                </Field>
                <Field name="breed">
                  {({ select }) => (
                    <div>
                      <select {...handleSelectBreed}>
                        <option value="breed" disabled>
                          Selecione uma raça
                        </option>
                        {breeds.map((breed) => (
                          <option value={breed.breed} key={breed.breed}>
                            {breed.breed}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </Field>
                <Field name="sub-breed">
                  {({ select }) => (
                    <div>
                      <select {...handleSelectSubbreed}>
                        <option value="subbreed" disabled>
                          Selecione uma sub-raça
                        </option>
                        {subbreeds.map((subbreed) => (
                          <option value={subbreed} key={subbreed}>
                            {subbreed}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </Field>
                <Field name="color">
                  {({ DogColor }) => (
                    <div>
                      <p>Selecione uma cor</p>
                      <DogColor
                        color="#000000"
                        name="Preto"
                        handleColor={handleColor}
                      />
                      <DogColor
                        color="#7B3F00"
                        name="Marrom"
                        handleColor={handleColor}
                      />
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
                      <DogColor
                        color="#FFFDD0"
                        name="Creme"
                        handleColor={handleColor}
                      />
                      <DogColor
                        color="#cccccc"
                        name="Cinzento"
                        handleColor={handleColor}
                      />
                    </div>
                  )}
                  <p>Cor selecionada: {color}</p>
                </Field>
                <Field name="gender">
                  {({ select }) => (
                    <div>
                      <select {...select} onChange={handleGender}>
                        <option value="selectgender" disabled>
                          Selecione o sexo
                        </option>
                        <option value="macho">Macho</option>
                        <option value="fêmea">Fêmea</option>
                      </select>
                      <p>
                        {selectedGender
                          ? `Valor adicional para ${gender} é ${selectedGender}`
                          : `Valor adicional`}
                      </p>
                    </div>
                  )}
                </Field>
                <Field name="age">
                  {({ input }) => (
                    <div>
                      <input
                        {...input}
                        placeholder="Digite a idade desejada"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                      />
                    </div>
                  )}
                </Field>
                <FavButton>
                  <div>
                    <button type="button">
                      <MdFavorite size={20} color="#fff" />
                      <span>Reserve seu amigo</span>
                    </button>
                  </div>
                </FavButton>
              </form>
            )}
          />
        </FormInput>
      </FormSearch>
    </Container>
  );
}

export default DogForm;
