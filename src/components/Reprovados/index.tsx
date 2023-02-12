import axios from 'axios'
import Dados from 'components/Dados'
import React, { useEffect, useState } from 'react'
import { Container, Labels, Titulo } from './style'

interface Props {
  data?: {
    status?: number,
    message?: string,
    toke?: number,
    agency?: string,
  },
  agencia: string
}

const ReprovadoComp = ({data, agencia}: Props) => {
  const [ usuarios, setUsuarios ] = useState<any>()

  useEffect(() => {
    axios.get(`https://contause.digital/valida/consult.php?agency=${agencia}&accountCreationStatus=COMPLETED_FAIL`)
    .then((response) => {
      setUsuarios(response)
    })
    .catch((error) => {
      console.log(error);
    })   
  }, [data?.agency])  

  return (
    <Container>
      <Titulo>Documentos Reprovados</Titulo>
      <Labels>
        <p>#</p>
        <p>Usuário</p>
        <p>Data</p>
      </Labels>
      {usuarios && usuarios.data.map((usuario: any) => (
        <Dados key={usuario.id_new} usuario={usuario}/>
      ))}

    </Container>
  )
}

export default ReprovadoComp