import styled from "styled-components";
import { laranja } from 'theme/variaveis'

export const Container = styled.div`
  margin-left: 10px;

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    color: ${laranja};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 30px;
  }
`