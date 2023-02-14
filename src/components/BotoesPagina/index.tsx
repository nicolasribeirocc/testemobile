import { Dispatch, SetStateAction } from 'react'
import { Container } from './style'

interface Props {
  pagina: number,
  setPagina: Dispatch<SetStateAction<number>>,
}

const Botoes = ({pagina, setPagina}: Props) => {
  const diminuiPagina = () => {
    pagina <= 1 ? setPagina(1) : setPagina(pagina - 1)
  }

  const aumentaPagina = () => {
    setPagina(pagina + 1)
  }

  return (
    <div>
      <Container>
        <button onClick={diminuiPagina}>&#60;</button>
        <p>{pagina}</p>
        <button onClick={aumentaPagina}>&#62;</button>
      </Container>
    </div>
  )
}
export default Botoes