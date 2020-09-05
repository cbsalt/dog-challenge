import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    width: 360px;
  }
`;
