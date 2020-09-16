import React from 'react';
import PropTypes from 'prop-types';

import { Container, Wrapper } from './styled';

function DogList({ dogList }) {
  return (
    <Container>
      <Wrapper>
        <div>
          <span>Doguinhos reservados</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Raça</th>
              <th>Sub-raça</th>
              <th>Sexo</th>
              <th>Cor</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {dogList.map((dog, i) => (
              <tr key={i}>
                <td>{dog.dogname}</td>
                <td>{dog.selectbreed}</td>
                <td>{dog.selectsubbreed}</td>
                <td>{dog.selectgender}</td>
                <td>{dog.selectcolor}</td>
                <td>{dog.selectage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    </Container>
  );
}

export default DogList;

DogList.propTypes = {
  dogList: PropTypes.instanceOf(Array).isRequired,
};
