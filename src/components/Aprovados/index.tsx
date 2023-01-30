import React, { useEffect, useState } from 'react'
import { Container, Labels, Titulo} from './style'
import axios from 'axios';
import Dados from 'components/Dados';

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
      <Titulo>Documentos Aprovados</Titulo>
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

export default AprovadosComp