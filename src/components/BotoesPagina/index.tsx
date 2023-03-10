import { Dispatch, SetStateAction } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Container } from './style'

interface Props {
  pagina: number,
  setPagina: Dispatch<SetStateAction<number>>,
  qtd: number,
}

const Botoes = ({pagina, setPagina, qtd}: Props) => {
  const diminuiPagina = () => {
    pagina <= 1 ? setPagina(1) : setPagina(pagina - 1)
  }

  const aumentaPagina = () => {
    setPagina(pagina + 1)
  }

  console.log(qtd)
  return (
    <div>
      <Container>
        <button onClick={diminuiPagina}>{<FaArrowLeft />}</button>
        <p>{pagina}</p>
        {qtd === 10 ? <button onClick={aumentaPagina}>{<FaArrowRight />}</button> : <button style={{visibility: 'hidden'}} onClick={aumentaPagina}>{<FaArrowRight />}</button>}
      </Container>
    </div>
  )
}
export default Botoes