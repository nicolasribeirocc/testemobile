/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { Dispatch, MouseEvent, SetStateAction, useEffect } from 'react'
import { useHistory } from 'react-router'
import { FormContainer } from './style'

interface Props {
  data?: {
    status?: number,
    sucess?: string,
    token?: number
  },
  setEmail: Dispatch<SetStateAction<string | undefined>>,
  setSenha: Dispatch<SetStateAction<string | undefined>>,
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

const Form = ({data, setEmail, setSenha, handleSubmit}:Props) => {
  const history = useHistory()

  useEffect(() => {    
    if(data?.status === 1) {
      history.push('/home')
    }
  })

  return (
      <FormContainer action="">
        <label htmlFor="email">E-mail</label>
        <input 
          type="text" 
          name='email' 
          id='email' 
          placeholder='contause@casadocredito.com.br' 
          autoComplete='off'
          onChange={(e) => setEmail(e.target.value.toLowerCase().trimStart().trimEnd())}
        />
        <label htmlFor="senha">Senha</label>
        <input 
          type="password" 
          name='senha' 
          id='senha' 
          placeholder='••••••••'
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={handleSubmit}>Entrar</button>
      </FormContainer>
  )
}

export default Form 