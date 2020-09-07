import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 70% 20%;
  max-width: 1020px;
  background: #fff;
  padding: 16px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;

  div {
    span {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      text-transform: uppercase;
    }

    p {
      font-size: 16px;
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
  display: grid;
  align-items: end;
  justify-items: left;

  > p {
    font-size: 16px;
  }
`;
