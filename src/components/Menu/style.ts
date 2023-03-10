import styled from "styled-components";
import { azul } from 'theme/variaveis'

export const Container = styled.div`

  .icone {
    font-size: 30px; 
    padding-right: 10px;
    color: ${azul}
  }

  ion-toolbar {
    --background: ${azul};
  }
  ion-title {
    color: #fff;
  }
  ion-menu-button {
    color: #fff;
  }
`

export const Logo = styled.img`
  bottom: 5%;
  left: 0;
  margin: 0 auto;
  right: 0;
  position: absolute;
  width: 200px;
`