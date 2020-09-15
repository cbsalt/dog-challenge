import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 428px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
  display: grid;
  grid-template-rows: 10% 90%;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    place-content: space-between;

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

    h3 {
      font-size: 18px;
      text-transform: none;
      text-align: center;
    }

    input[type='radio'] {
      display: none;
    }

    label {
      svg {
        width: 36px;
        height: 36px;

        :hover {
          cursor: pointer;
        }
      }
    }

    div {
      svg {
        margin-right: 12px;
      }
    }
  }

  span {
    color: #f34336;
    font-size: 12px;
    text-align: center;
    display: block;
  }
`;

export const LabelColor = styled.label`
  svg {
    transform: ${(props) => (props.active ? 'scale(0.75)' : 'scale(1)')};
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: contents;

  button {
    width: 100%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
