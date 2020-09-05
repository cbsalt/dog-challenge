import styled from 'styled-components';

export const ButtonColor = styled.button`
  background: ${(props) => props.background};
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;
