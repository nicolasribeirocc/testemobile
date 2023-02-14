import styled from 'styled-components'
import { azul } from 'theme/variaveis'

export const Container = styled.div`
  align-items: center;
  background-color: ${azul};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  & img {
    width: 10%;
  }
`