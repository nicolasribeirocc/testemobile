import styled from 'styled-components'
import "theme/variables.css"

export const Container = styled.div`
  align-items: center;
  background-color: var(--azul);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  & img {
    width: 10%;
  }
`