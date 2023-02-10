import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from './style'

const UserInfo = ({id}: any) => {
  const [dados, setDados] = useState<any>()

  useEffect(() => {
    axios.get(`https://contause.digital/valida/detalhe.php?tipo=retornaconta&idnew=${id.id}`)
    .then((response) => {
      setDados(response)
    })
    .catch((error) => {
      console.log(error);
    })   
  }, [id])

  const dado = dados?.data[0]

  return (
    <Container>
      {dado && <>
        <h3>Nome Completo</h3>
        <p>{dado.fullName} </p>
        <h3>Email</h3>
        <p>{dado.email}</p>
        <h3>Gênero</h3>
        <p>{dado.gender}</p>
        <h3>Data De Nascimento</h3>
        <p>{dado.birthDate}</p>
        <h3>CPF</h3>
        <p>{dado.cpf}</p>
        <h3>RG</h3>
        <p>{dado.rg}</p>
        <h3>RG - Órgão Expedidor</h3>
        <p>{dado.rgIssuingOrgan}</p>
        <h3>Nome Da Mãe</h3>
        <p>{dado.motherName}</p>
        <h3>Telefone</h3>
        <p>{`${dado.contactDdd} ${dado.contactPhoneNumber}`}</p>
        <h3>Estado</h3>
        <p>{dado.province}</p>
        <h3>País</h3>
        <p>Brasil</p>
        <h3>CEP</h3>
        <p>{dado.zipCode}</p>
        <h3>Cidade</h3>
        <p>{dado.city}</p>
        <h3>Número</h3>
        <p>{dado.streetNumber}</p>
        <h3>Endereço</h3>
        <p>{dado.address}</p>
        <h3>Bairro</h3>
        <p>{dado.neighborhood}</p>
        <h3>Complemento</h3>
        <p>{dado.complement}</p>      
      </>
      }

    </Container>
  )
}

export default UserInfo