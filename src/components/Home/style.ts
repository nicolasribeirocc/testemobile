import styled from "styled-components";
import {ReactComponent as LogoLetra} from 'assets/images/logobranco.svg'

export const Container = styled.div`
  align-items: center;
  background-color: var(--azul);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`

export const Logo = styled(LogoLetra)`
    width: 350px;
    height: fit-content;
    position: absolute;
    top: 60px;
`