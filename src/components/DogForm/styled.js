import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 428px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 20px;

  span {
    color: #333;
    font-size: 24px;
    text-align: center;
    display: block;
    text-transform: uppercase;
  }

  @media (max-width: 1050px) {
    width: auto;
  }
`;

export const FormSearch = styled.div`
  margin-top: 30px;
`;

export const FormInput = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;

  input {
    width: 100%;
    height: 32px;
    font-size: 16px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }

  select {
    width: 100%;
    height: 32px;
    font-size: 16px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }
  div {
    text-align: center;

    p {
      font-size: 18px;
      margin-bottom: 16px;
    }
  }

  > p {
    text-align: center;
  }
`;

export const FavButton = styled.div`
  button {
    width: 100%;
    border: 0;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 15px 20px;
    background: #3cb371;
    color: #fff;
    transition: background 0.4s;

    &:hover {
      background: ${darken(0.08, '#3cb371')};
    }
    span {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      padding: 0 5px;
    }
  }
`;
