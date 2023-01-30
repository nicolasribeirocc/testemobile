import React from 'react'
import { VictoryBar, VictoryChart, VictoryLabel } from 'victory'
import { Container } from './style'

const Grafico = () => {
  return (
    <Container>
        <VictoryChart style={{background: {
          fill: '#fff'
        }}}>
        <VictoryBar
          labelComponent={<VictoryLabel  />}
          data={[
            {x: 1, y: 0, fill: "#F15922"},
            {x: 2, y: 150, label: "Aprovados", fill: "#F15922"},
            {x: 3, y: 25, label: "Reprovados", fill: "#2E3155"},
            {x: 4, y: 10, label: "Cancelados", fill:"#fbff00"},
          ]}
          alignment="start"
          style={{
            data: {
              fill: ({datum}) => datum.fill
            }
          }}
        />
      </VictoryChart>
    </Container>
  )
}

export default Grafico