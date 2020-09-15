import React from 'react';

import { Container, Wrapper } from './styled';

function DogList() {
  const dogs = JSON.parse(localStorage.getItem('@app:dog'));

  return (
    <Container>
      <div>
        <span>Doguinhos reservados</span>
      </div>
      <Wrapper>
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
            <tr>
              <td>{dogs.dogname}</td>
              <td>{dogs.selectbreed}</td>
              <td>{dogs.selectsubbreed}</td>
              <td>{dogs.selectgender}</td>
              <td>{dogs.selectcolor}</td>
              <td>{dogs.selectage}</td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    </Container>
  );
}

export default DogList;
