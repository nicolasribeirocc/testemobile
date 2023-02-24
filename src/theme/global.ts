import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
 }

 body {
    width: 100vw;
    height: 100vh;
    font-family: 'Lato', sans-serif;
  }
`

export default GlobalStyle