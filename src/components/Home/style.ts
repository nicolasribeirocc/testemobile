import styled from "styled-components";
import {ReactComponent as LogoLetra} from 'assets/images/logobranco.svg'

export const Container = styled.div`
  align-items: center;
  background-color: var(--azul);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  .info {
    bottom: 5%;
    position: absolute;
  }
`


export const Logo = styled(LogoLetra)`
  height: fit-content;
  position: absolute;
  top: 2.5em;
  width: 350px;
`