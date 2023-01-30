import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--azul);
  height: 100vh;
`

export const Labels = styled.div`
  color: #fff;
  display: flex;

  & p:nth-child(1) {
      padding-left: 15px;
  }

  & p:nth-child(2) {
      padding-left: 15px;
  }

  & p:nth-child(3) {
      padding-left: 140px;
  }
`

export const Registro = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;

  & button {
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    width: 18%;
}
`

export const Dados = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  color: #000;
  font-size: small;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  text-align: center;
  width: 80%;
`

export const Usuarios = styled.p`
  padding-left: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
`