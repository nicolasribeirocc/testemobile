import React from 'react'
import { Container, Informacoes, Titulo } from './style'
import UserInfo from './UserInfo'

const AnaliseComp = ({id}: any) => {
  return (
    <Container>
      <Titulo>Análise de Perfil</Titulo>
      <Informacoes>
        <h1>Informações do Usuário</h1>
        <UserInfo id={id} />
      </Informacoes>
    </Container>
  )
}

export default AnaliseComp