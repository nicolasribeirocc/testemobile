import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { Container, Dados, Labels, Registro, Usuarios } from './style'
import axios from 'axios';

interface Props {
  data?: {
    status?: number,
    message?: string,
    toke?: number,
    agency?: string,
  }
}

const AprovadosComp = ({data}: Props)  => {
  const [ usuarios, setUsuarios ] = useState<any>()

  useEffect(() => {
    axios.get(`https://contause.digital/valida/consult.php?agency=${data?.agency}&accountCreationStatus=COMPLETED`)
    .then((response) => {
      setUsuarios(response)
    })
    .catch((error) => {
      console.log(error);
    })   
  }, [data?.agency])  

  return (
    <Container>
      <Labels>
        <p>#</p>
        <p>Usuário</p>
        <p>Data</p>
      </Labels>
      {usuarios && usuarios.data.map((usuario: any) => (
        <Registro key={usuario.id_new}>
          <Dados>
            <p>{usuario.id_new}</p>
            <Usuarios>{usuario.fullName}</Usuarios>
            <p>{usuario.createdAt}</p>
          </Dados>
          <button>{<FaEye />}</button>
        </Registro>
      ))}

    </Container>
  )
}

export default AprovadosComp