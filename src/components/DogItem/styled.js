import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 70% 20%;
  width: 428px;
  background: #fff;
  padding: 16px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;

  div {
    h2 {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      text-transform: uppercase;
    }

    span {
      font-size: 22px;
      margin-top: 8px;
    }
  }

  @media (max-width: 1050px) {
    width: 100%;
    min-height: 620px;
  }
`;

export const CardContent = styled.div`
  align-self: center;
  img {
    display: ${(props) => (props.selected ? 'flex' : 'none')};
    margin-top: 16px;
    width: 100%;
    height: 420px;
    object-fit: contain;
  }
`;

export const ItemWrapper = styled.div`
  display: ${(props) => (props.show ? 'grid' : 'none')};
  grid-template-columns: 1fr 1fr;
  align-items: end;
  justify-items: center;

  strong {
    font-size: 18px;
    color: #3cb371;
    text-transform: uppercase;
  }
`;
