import React from 'react'
import { FaRegEye } from 'react-icons/fa'
import { useHistory } from 'react-router'
import { Infos, Registro, Usuarios } from './style'

const Dados = ({usuario}: any) => {
  const history = useHistory()

  const handleAnalyze = () => {
    history.push(`/analise-perfil/${usuario.id_new}`)
  }

  return (
    <>
      <Registro>
        <Infos>
          <p>{usuario.id_new}</p>
          <Usuarios>{usuario.fullName}</Usuarios>
          <p>{usuario.createdAt}</p>
        </Infos>
        <button>{<FaRegEye color='#000' onClick={handleAnalyze}/>}</button>
      </Registro>
    </>
  )
}

export default Dados