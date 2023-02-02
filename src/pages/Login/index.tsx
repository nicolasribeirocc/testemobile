import { IonContent, IonPage } from '@ionic/react';
import { Container } from './style';
import Form from 'components/Form';
import Logo from 'components/Form/logo';
import React, { Dispatch, MouseEvent, SetStateAction } from 'react'

interface Props {
  data?: {
    status?: number,
    message?: string,
    token?: number
  },
  setEmail: Dispatch<SetStateAction<string | undefined> | null>,
  setSenha: Dispatch<SetStateAction<string | undefined> | null>,
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

const Login: React.FC<Props> = ({data, setEmail, setSenha, handleSubmit}) => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <Logo />
          <Form data={data} setEmail={setEmail} setSenha={setSenha} handleSubmit={handleSubmit}/>
        </Container>
      </IonContent>
    </IonPage>

  );
};

export default Login;
