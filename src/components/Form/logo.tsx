import React from 'react'
import {ReactComponent as LogoLetra} from 'assets/images/logo_com_letreiro.svg'
import styled from 'styled-components'

const Logo = () => {
  return (
    <LogoContainer>
      <LogoLetra />
    </LogoContainer>
  )
}

export default Logo

const LogoContainer = styled(LogoLetra)`
  width: 300px;
  height: fit-content;
  margin-bottom: 4em;
`