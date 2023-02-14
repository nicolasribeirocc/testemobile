import React, { useEffect, useState } from 'react'
import { Container, Labels, Titulo} from './style'
import axios from 'axios';
import Dados from 'components/Dados';
import { LinearProgress } from '@mui/material'
import Botoes from 'components/BotoesPagina';

interface Props {
  data?: {
    status?: number,
    message?: string,
    token?: number,
    agency?: string,
  },
  agencia: string
}

const AprovadosComp = ({data, agencia}: Props)  => {
  const [ usuarios, setUsuarios ] = useState<any>()
  const [ load, setLoad ] = useState(false)
  const [ pagina, setPagina ] = useState(1)

  useEffect(() => {
    axios.get(`https://contause.digital/valida/consult.php?agency=${agencia}&accountCreationStatus=COMPLETED&page=${pagina}`)
    .then((response) => {
      setUsuarios(response)
      setLoad(true)
    })
    .catch((error) => {
      console.log(error);
    })   
  }, [agencia, pagina])

  return (
    <Container>
      <Titulo>Documentos Aprovados</Titulo>
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
      {usuarios?.data.length !== 0 && <Botoes pagina={pagina} setPagina={setPagina}/>}   
    </Container>
  )
}

export default AprovadosComp