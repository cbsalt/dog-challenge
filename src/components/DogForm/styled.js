import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 428px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  display: grid;
  grid-template-rows: 10% 80% 10%;

  h2 {
    color: #333;
    font-size: 24px;
    text-align: center;
    display: block;
    text-transform: uppercase;
    height: 0;
  }

  @media (max-width: 1050px) {
    width: auto;
    min-height: 620px;
  }
`;

export const FormWrapper = styled.div`
  form {
    display: grid;
    line-height: 3.2;

    input {
      height: 32px;
      font-size: 16px;
      color: #666;
      border: 0;
      border-bottom: 1px solid #eee;
      margin: 0 0 10px;
    }

    select {
      width: 100%;
      height: 32px;
      font-size: 16px;
      color: #666;
      border: 0;
      border-bottom: 1px solid #eee;
      margin: 4px 0 8px;
    }

    h3 {
      font-size: 18px;
      text-transform: none;
      text-align: center;
    }

    div {
      display: flex;
      justify-content: center;

      svg {
        cursor: pointer;
        margin-right: 8px;
        border: none;
      }
    }

    p {
      text-align: center;
    }

    label {
      margin: 0 48px;
      display: grid;

      > input {
        height: 16px;
        justify-self: center;
      }
    }
  }

  span {
    color: #f34336;
    font-size: 12px;
    margin: -18px 0px 0px;
  }
`;

export const FavButton = styled.div`
  button {
    width: 100%;
    border: 0;
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
      margin: 0;
      text-transform: uppercase;
    }
  }
`;

export const IconWrapper = styled.div``;
