import styled from "styled-components";
import { azul, laranja } from 'theme/variaveis'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-top: 1em;
  padding-bottom: 1em;

  & p {
    color: #fff;
    font-size: large;
    font-weight: bold;
  }

  & button {
    background-color: ${laranja};
    border-radius: 5px;
    color: ${azul};
    font-size: large;
    font-weight: bold;
    padding: 10px;
    width: 80px;
  }
`