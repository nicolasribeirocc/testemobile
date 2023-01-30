import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  & label {
    color: #fff;
    font-size: large;
    font-weight: bold;
    margin-bottom: .5em;
  }

  & input {
    background-color: #fff;
    border: none;
    border-radius: 15px;
    font-size: large;
    padding: 20px;
    margin-bottom: 1.5em;
  }

  & input::placeholder {
    font-size: large;
  }

  & input:focus {
    border: 2px solid var(--laranja);
    outline: none;
  }

  & button {
    align-self: center;
    background-color: transparent;
    border: 3px solid #fff;
    border-radius: 15px;
    color: #fff;
    font-size: large;
    font-weight: bold;
    margin: em 0;
    padding: 20px;
    width: 70%;
  }

  & button:active {
    color: var(--laranja);
    border: 3px solid var(--laranja);
  }
`

