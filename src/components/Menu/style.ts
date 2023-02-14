import styled from "styled-components";
import { azul, laranja } from 'theme/variaveis'

export const Container = styled.div`
  ion-toolbar {
    --background: ${azul};
 }
 ion-title {
  color: #fff;
 }
 ion-menu-button {
  color: ${laranja};
 }
`