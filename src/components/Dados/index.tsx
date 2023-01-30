import React from 'react'
import { FaEye } from 'react-icons/fa'
import { Infos, Registro, Usuarios } from './style'

const Dados = ({usuario}: any) => {
  return (
    <>
      <Registro>
        <Infos>
          <p>{usuario.id_new}</p>
          <Usuarios>{usuario.fullName}</Usuarios>
          <p>{usuario.createdAt}</p>
        </Infos>
        <button>{<FaEye />}</button>
      </Registro>
    </>
  )
}

export default Dados