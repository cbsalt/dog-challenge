import { createGlobalStyle } from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #c5c5c5;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, select {
    font: 14px Roboto, sans-serif;
  }
  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;

      @media (max-width: 1050px) {
      padding: 0;
    }
  }
  button {
    cursor: pointer;
  }
`;
