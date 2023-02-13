import { LinearProgress } from '@mui/material'
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

const AprovarComp = ({data, agencia}: Props) => {
  const [ usuarios, setUsuarios ] = useState<any>()
  const [ load, setLoad ] = useState(false)

  useEffect(() => {
    axios.get(`https://contause.digital/valida/consult.php?agency=${agencia}&accountCreationStatus=AWAITING_DOCUMENT_APPROVAL`)
    .then((response) => {
      setUsuarios(response)
      setLoad(true)
    })
    .catch((error) => {
      console.log(error);
    })   
  }, [agencia])  

  return (
    <Container>
      <Titulo>Documentos para Aprovar</Titulo>
      <Labels>
        <p>#</p>
        <p>Usuário</p>
        <p>Data</p>
      </Labels>
      {!load && <LinearProgress style={{ height: 6 }} />}
      {usuarios && usuarios.data.map((usuario: any) => (
        <Dados key={usuario.id_new} usuario={usuario}/>
      ))}
      {usuarios?.data.length === 0 && <p className='aviso'>Entre novamente usando seu login e senha</p>}
    </Container>
  )
}

export default AprovarComp