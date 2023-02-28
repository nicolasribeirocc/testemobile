import React, { useEffect, useState } from 'react'
import Logo  from 'assets/images/logoby.png'
import { Container, Dados } from './style'
import axios from 'axios'

interface Props {
  agencia: string
}

const Contador = ({ agencia }: Props) => {
  const [ PF, setPF ] = useState<string>()
  const [ PJ, setPJ ] = useState<string>()
  
  useEffect(() => {
    axios.get(`https://contause.digital/valida/cont.php?agency=${agencia}&accountCreationStatus=COMPLETED&tipoconta=PF&service=contador`)
    .then((response) => {
      setPF(response.data[0].cont)
    })
    .catch((error) => console.log(error))
    axios.get(`https://contause.digital/valida/cont.php?agency=${agencia}&accountCreationStatus=COMPLETED&tipoconta=PJ&service=contador`)
    .then((response) => {
      setPJ(response.data[0].cont)
    })
    .catch((error) => console.log(error))
  }, [agencia])

  return (
    <Container>
      <img src={Logo} width={200} alt="" />
      <Dados>
        <div>
          <p>Contas PF</p>
          <p>Contas PJ</p>
        </div>
        <div>
          <p>{PF}</p>
          <p>{PJ}</p>
        </div>
      </Dados>
    </Container>
  )
}

export default Contador