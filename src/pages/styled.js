import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
  height: 620px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    width: 360px;
    height: auto;
  }
`;
