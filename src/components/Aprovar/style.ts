import styled from "styled-components";
import { azul, laranja } from 'theme/variaveis'

export const Container = styled.div`
  background-color: ${azul};
  height: 100vh;

  .aviso {
    color: ${laranja};
    font-size: 16px;
    font-weight: 700;
    margin-top: 2em;
    text-align: center;
    text-decoration: underline;
  }
`

export const Labels = styled.div`
  color: #fff;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  margin: 0 6.2em 0 1.5em ;
`
export const Titulo = styled.h2`
  font-size: xx-large;
  font-weight: bold;
  color: #fff;
  margin: 0 auto;
  padding: 1em 0;
  text-align: center;
  width: 60%;
`