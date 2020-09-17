/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { MdFavorite } from 'react-icons/md';
import { FaDog, FaListAlt } from 'react-icons/fa';

import SelectBreedDog from '../SelectDogBreed';
import SelectSubbreedDog from '../SelectDogSubbreed';
import SelectGenderDog from '../SelectGenderDog';
import SelectColorDog from '../SelectDogColor';
import DogList from '../DogList';

import dogcolors from '../SelectDogColor/content';
import { validationSchema } from './validationSchema';

import { Container, FormWrapper, ButtonWrapper, LabelColor } from './styled';

function DogForm({
  handleSelectBreed,
  handleSelectSubbreed,
  breeds,
  subbreeds,
  handleSubmit,
  handleGenderChange,
  form,
  dogList,
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

  const handleShowList = useCallback(() => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      width: 800,
      html: <DogList dogList={dogList} />,
      showCloseButton: true,
      confirmButtonColor: '#3cb371',
      footer: `Made with 🖤`,
    });
  }, [dogList]);

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
                  data-testid="dogname"
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
          <ButtonWrapper>
            <button type="submit">
              <MdFavorite size={22} color="#fff" />
              <span>Reserve seu amigo</span>
            </button>
            <button type="button" onClick={handleShowList}>
              <FaListAlt size={22} color="#fff" />
              <span>Listar reservados</span>
            </button>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </Container>
  );
}

export default DogForm;

DogForm.propTypes = {
  breeds: PropTypes.instanceOf(Array).isRequired,
  subbreeds: PropTypes.instanceOf(Array).isRequired,
  handleSelectBreed: PropTypes.func.isRequired,
  handleSelectSubbreed: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleGenderChange: PropTypes.func.isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
  meta: PropTypes.bool,
  dogList: PropTypes.instanceOf(Array).isRequired,
};

DogForm.defaultProps = {
  meta: false,
};
