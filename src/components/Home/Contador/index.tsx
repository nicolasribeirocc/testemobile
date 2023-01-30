import React from 'react'
import Logo  from 'assets/images/logoby.png'
import { Container, Dados } from './style'

const Contador = () => {
  return (
    <Container>
      <img src={Logo} width={200} alt="" />
      <Dados>
        <div>
          <p>Contas PF</p>
          <p>Contas PJ</p>
        </div>
        <div>
          <p>1000</p>
          <p>800</p>
        </div>
      </Dados>
    </Container>
  )
}

export default Contador