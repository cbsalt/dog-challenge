/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { MdFavorite } from 'react-icons/md';

import SelectBreedDog from '../SelectDogBreed';
import SelectSubbreedDog from '../SelectDogSubbreed';
import DogColor from '../SelectDogColor';

import dogcolors from '../SelectDogColor/content';
import { validationSchema } from './validationSchema';

import { Container, FormWrapper, FavButton, IconWrapper } from './styled';

function DogForm({
  breeds,
  handleSelectBreed,
  handleSelectSubbreed,
  subbreeds,
}) {
  let submit;
  const [color, setColor] = useState('');

  const handleColor = useCallback((colorSelected) => {
    setColor(colorSelected);
  }, []);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    JSON.stringify(values, 0, 2);
  };

  const validateField = (value, name) => {
    const schema = validationSchema.fields[name];

    try {
      return schema.validateSync(value);
    } catch (e) {
      return e.errors && e.errors[0];
    }
  };

  const validateFieldName = (value) => {
    return validateField(value, 'dogname');
  };

  const validateFieldBreed = (value) => {
    return validateField(value, 'selectbreed');
  };

  const validateFieldAge = (value) => {
    return validateField(value, 'selectage');
  };

  return (
    <Container>
      <div>
        <h2>Escolha seu novo amigo</h2>
      </div>
      <FormWrapper>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => {
            submit = handleSubmit;
            return (
              <form onSubmit={handleSubmit}>
                <Field name="dogname" validate={validateFieldName}>
                  {({ input, meta }) => (
                    <>
                      <input
                        type="text"
                        placeholder="Digite aqui o nome do seu novo doguinho"
                        {...input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
                <Field
                  name="selectbreed"
                  render={(props) => (
                    <>
                      <SelectBreedDog breeds={breeds} {...props} />
                      {props.meta.error && props.meta.touched && (
                        <span>{props.meta.error}</span>
                      )}
                    </>
                  )}
                  inputOnChange={handleSelectBreed}
                  validate={validateFieldBreed}
                />
                <Field
                  name="selectsubbreed"
                  render={(props) => (
                    <SelectSubbreedDog subbreeds={subbreeds} {...props} />
                  )}
                  inputOnChange={handleSelectSubbreed}
                />
                <>
                  <h3>Selecione a cor</h3>
                  <div>
                    {dogcolors.map((dogcolor, i) => {
                      return (
                        <IconWrapper key={i}>
                          <DogColor
                            handleColor={handleColor}
                            color={dogcolor.color}
                            name={dogcolor.name}
                          />
                        </IconWrapper>
                      );
                    })}
                  </div>
                  <p>{color ? `Cor selecionada: ${color}` : `ﾠ`}</p>
                </>
                <div>
                  <label>
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      value="macho"
                    />
                    Macho
                  </label>
                  <label>
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      value="fêmea"
                    />
                    Fêmea
                  </label>
                </div>
                <Field name="selectage" validate={validateFieldAge}>
                  {({ input, meta }) => (
                    <>
                      <input
                        type="number"
                        placeholder="Digite a idade buscada"
                        {...input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </form>
            );
          }}
        />
      </FormWrapper>
      <FavButton>
        <button
          type="submit"
          onClick={(event) => {
            submit(event);
          }}
        >
          <MdFavorite size={22} color="#fff" />
          <span>Reserve seu amigo</span>
        </button>
      </FavButton>
    </Container>
  );
}

export default connect()(DogForm);
