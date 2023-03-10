import styled from "styled-components";

export const Registro = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;

  & button {
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 18%;
}
`

export const Infos = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  color: #000;
  font-size: small;
  display: flex;
  justify-content: space-between;
  min-height: 50px;;
  padding-left: 5px;
  text-align: center;
  width: 80%;
`

export const Usuarios = styled.p`
  padding-left: 15px;
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
`