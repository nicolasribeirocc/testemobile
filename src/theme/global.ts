import { createGlobalStyle } from "styled-components";
import { azul } from "./variaveis";

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
 }

 .md button.alert-button.alert-button {
    background-color: ${azul};
    color: #fff;
    font-size: 16px;
    text-align: center;
    width: 70px;
  }

  .md .alert-button-inner.sc-ion-alert-md {
    -ms-flex-pack: end;
    justify-content: center;
  }

 body {
    width: 100vw;
    height: 100vh;
  }
`

export default GlobalStyle