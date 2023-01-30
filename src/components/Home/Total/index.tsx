import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { Container } from './style'

const Total = () => {
  const [ qtd, setQtd ] = useState()
  useEffect(() => {
    axios.get('https://contause.digital/valida/consult.php?agency=0001&accountCreationStatus=COMPLETED&cont=1')
    .then((response) => {
      setQtd(response.data[0].cont);
    })
  }, [])
  return (
    <Container>
        <FaUsers size={100} />
        <p>Total de contas {qtd}</p>
    </Container>
  )
}

export default Total