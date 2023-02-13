import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--azul);
  height: 100vh;

  .aviso {
    color: var(--laranja);
    font-size: 16px;
    font-weight: 700;
    margin-top: 2em;
    text-align: center;
    text-decoration: underline;
  }
`

export const Labels = styled.div`
  font-weight: bold;
  color: #fff;
  display: flex;

  & p:nth-child(1) {
      padding-left: 15px;
  }

  & p:nth-child(2) {
      padding-left: 15px;
  }

  & p:nth-child(3) {
      padding-left: 120px;
  }
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