import { IonContent, IonPage } from '@ionic/react';
import AprovadosComp from 'components/Aprovados';
import Menu from 'components/Menu';
import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components';
import 'theme/variables.css'

type Data = {
  status?: number,
  message?: string,
  toke?: number
}

interface Props {
  data: Data | undefined,
  email: string | undefined,
  setEmail: Dispatch<SetStateAction<string | undefined>>,
  setSenha: Dispatch<SetStateAction<string | undefined>>,
  setData: Dispatch<React.SetStateAction<Data | string | undefined>>,
  agencia: string
}

const Aprovados: React.FC<Props>= ({data, email, setEmail, setSenha, setData, agencia}) => {
  
  return (
    <Container>
      <IonPage>
        <IonContent fullscreen>
          <Menu elemento={<AprovadosComp data={data} agencia={agencia} />} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData}/>
        </IonContent>
      </IonPage>
    </Container>

  );
};

const Container = styled.div`
  ion-content {--overflow: hidden}

  @media screen and (max-height: 859px) {
    ion-content {
      --overflow: auto;
    }
    ion-content .elemento {
      --ion-background-color: var(--azul);
    }
  }
`

export default Aprovados