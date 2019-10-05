import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin:0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing:border-box;
  }
  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    line-height: 1.15;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: inherit;
  }
`;
