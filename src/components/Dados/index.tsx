import React from 'react'
import { FaRegEye } from 'react-icons/fa'
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
        <button>{<FaRegEye />}</button>
      </Registro>
    </>
  )
}

export default Dados