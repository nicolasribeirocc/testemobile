import React from 'react'
import Contador from './Contador'
import Grafico from './Grafico'
import { Container, Logo } from './style'
import Total from './Total'

interface Props {
  data?: {
    status?: number,
    message?: string,
    token?: number
  } | undefined,
  email?: string | undefined
}

const HomeComp = ({data, email}: Props)=> {
  return (
    <Container>
      <Logo />
      <Grafico />
      <Total />
      <Contador />
    </Container>
  )
}

export default HomeComp