import React from 'react'
import Contador from './Contador'
import { Container, Logo } from './style'
import Total from './Total'

interface Props {
  agencia: string,
  url?: string,
}

const HomeComp = ({ agencia, url }: Props)=> {
  return (
    <Container>
      <Logo />
      <div className='info'>
        <Total agencia={agencia} />
        <Contador agencia={agencia} url={url}/>
      </div>
    </Container>
  )
}

export default HomeComp