import styled from "styled-components";
import { azul } from 'theme/variaveis'

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
    align-content: center;
    background-color: #fff;
    border-radius: 5px;
    color: ${azul};
    display: flex;
    font-size: large;
    font-weight: bold;
    justify-content: center;
    padding: 10px;
    width: 80px;
  }
`