import React from 'react'
import Contador from './Contador'
import { Container, Logo } from './style'
import Total from './Total'

interface Props {
  agencia: string
}

const HomeComp = ({ agencia }: Props)=> {
  return (
    <Container>
      <Logo />
      <div className='info'>
        <Total agencia={agencia} />
        <Contador agencia={agencia} />
      </div>
    </Container>
  )
}

export default HomeComp