import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 1020px;
  background: #fff;
  padding: 16px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;

  span {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

export const CardContent = styled.div`
  img {
    display: ${(props) => (props.selected ? 'flex' : 'none')};
    margin-top: 16px;
    width: 100%;
    height: 420px;
    object-fit: contain;
  }
`;
