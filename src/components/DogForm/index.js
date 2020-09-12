/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback } from 'react';
import { Field } from 'react-final-form';
import { MdFavorite } from 'react-icons/md';
import { FaDog } from 'react-icons/fa';

import SelectBreedDog from '../SelectDogBreed';
import SelectSubbreedDog from '../SelectDogSubbreed';
import SelectGenderDog from '../SelectGenderDog';
import SelectColorDog from '../SelectDogColor';

import dogcolors from '../SelectDogColor/content';
import { validationSchema } from './validationSchema';

import { Container, FormWrapper, FavButton, LabelColor } from './styled';

function DogForm({
  handleSelectBreed,
  handleSelectSubbreed,
  breeds,
  subbreeds,
  handleSubmit,
  handleGenderChange,
  form,
  keepDirtyOnReinitialize,
}) {
  const [colorsDog, setColorsDog] = useState(dogcolors);

  const validateField = (value, name) => {
    const schema = validationSchema.fields[name];

    try {
      schema.validateSync(value);
      return null;
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

  const validateFieldColor = (value) => {
    return validateField(value, 'selectcolor');
  };

  const validateFieldGender = (value) => {
    return validateField(value, 'selectgender');
  };

  const validateFieldAge = (value) => {
    return validateField(value, 'selectage');
  };

  const handleBreedDog = useCallback(
    (e) => {
      handleSelectBreed(e);

      form.mutators.setSubBreedForm();
    },
    [form.mutators, handleSelectBreed]
  );

  const handleSelectDogColor = useCallback(
    (e, idcolor) => {
      e.stopPropagation();

      const newColorsDogArray = colorsDog.map((color) => ({
        ...color,
        active: color.id === idcolor,
      }));

      setColorsDog(newColorsDogArray);
    },
    [colorsDog]
  );

  return (
    <Container>
      <div>
        <h2>Escolha seu novo amigo</h2>
      </div>
      <FormWrapper>
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
            validate={validateFieldBreed}
            render={(props) => (
              <>
                <SelectBreedDog breeds={breeds} {...props} />
                {props.meta.error && props.meta.touched && (
                  <span>{props.meta.error}</span>
                )}
              </>
            )}
            inputOnChange={handleBreedDog}
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
              {colorsDog.map((dogcolor, i) => (
                <Field
                  key={i}
                  name="selectcolor"
                  validate={validateFieldColor}
                  type="radio"
                  value={dogcolor.name}
                  render={(props) => (
                    <>
                      <LabelColor
                        active={dogcolor.active}
                        onClick={(e) => handleSelectDogColor(e, dogcolor.id)}
                        htmlFor={dogcolor.color}
                      >
                        <FaDog color={dogcolor.color} />
                        <SelectColorDog color={dogcolor.color} {...props} />
                      </LabelColor>
                      {props.meta.error &&
                        props.meta.touched &&
                        i === colorsDog.length - 1 && (
                          <span>{props.meta.error}</span>
                        )}
                    </>
                  )}
                />
              ))}
            </div>
          </>
          <Field
            name="selectgender"
            validate={validateFieldGender}
            render={(props) => (
              <>
                <SelectGenderDog {...props} />
                {props.meta.error && props.meta.touched && (
                  <span>{props.meta.error}</span>
                )}
              </>
            )}
            inputOnChange={handleGenderChange}
          />
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
          <FavButton>
            <button type="submit">
              <MdFavorite size={22} color="#fff" />
              <span>Reserve seu amigo</span>
            </button>
          </FavButton>
        </form>
      </FormWrapper>
    </Container>
  );
}

export default DogForm;
