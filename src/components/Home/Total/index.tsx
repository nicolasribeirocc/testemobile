import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { Container } from './style'

interface Props {
  agencia: string
}

const Total = ({ agencia }: Props) => {
  const [ qtd, setQtd ] = useState()
  useEffect(() => {
    axios.get(`https://contause.digital/valida/cont.php?agency=${agencia}&accountCreationStatus=COMPLETED&cont=1&service=contadorgeral`)
    .then((response) => {
      setQtd(response.data[0].cont);
    })
  }, [agencia])
  return (
    <Container>
        <FaUsers size={70} />
        <p>Total de contas {qtd}</p>
    </Container>
  )
}

export default Total