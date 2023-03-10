/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { Dispatch, MouseEvent, SetStateAction, useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import { FormContainer } from './style'

interface Props {
  data?: {
    status?: number,
    sucess?: string,
    token?: number
  },
  setEmail: Dispatch<SetStateAction<string | undefined> | null>,
  setSenha: Dispatch<SetStateAction<string | undefined > | null>,
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void
  verificado: boolean
}

const Form = ({data, setEmail, setSenha, handleSubmit, verificado}:Props) => {
  const history = useHistory()
  const inputEmail = useRef<any>();
  const inputSenha = useRef<any>();

  useEffect(() => {    
    if(data?.status === 1 || verificado) {
      history.push('/home')
    }
  })

  return (
      <FormContainer action="">
        <label htmlFor="email">E-mail</label>
        <input 
          type="email" 
          name='email' 
          id='email'
          ref={inputEmail}
          placeholder='exemplo@exemplo.com.br' 
          autoComplete='off'
          onChange={(e) => {
            setEmail(e.target.value.toLowerCase().trimStart().trimEnd())
            localStorage.setItem('email', e.target.value.toLowerCase().trimStart().trimEnd())
          }}
        />
        <label htmlFor="senha">Senha</label>
        <input 
          type="password" 
          name='senha' 
          id='senha'
          ref={inputSenha}
          placeholder='••••••••'
          onChange={(e) => {
            setSenha(e.target.value)
            localStorage.setItem('senha', e.target.value)
          }}
        />
        <button onClick={handleSubmit}>Entrar</button>
      </FormContainer>
  )
}

export default Form 