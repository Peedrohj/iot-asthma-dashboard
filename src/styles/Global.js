import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Nunito', sans-serif;
    font-size: 1em;
    background: #f8f8f8;
  }
`;
