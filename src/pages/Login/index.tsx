import React, { Dispatch, MouseEvent, SetStateAction } from 'react'
import { IonContent, IonPage } from '@ionic/react';
import { Container } from './style';
import Form from 'components/Form';
import Logo from 'components/Form/logo';

interface Props {
  data?: {
    status?: number,
    message?: string,
    token?: number
  },
  setEmail: Dispatch<SetStateAction<string | undefined> | null>,
  setSenha: Dispatch<SetStateAction<string | undefined> | null>,
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void,
  verificado: boolean
}

const Login: React.FC<Props> = ({data, setEmail, setSenha, handleSubmit, verificado}) => {
 
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <Logo />
          <Form data={data} setEmail={setEmail} setSenha={setSenha} handleSubmit={handleSubmit} verificado={verificado}/>
        </Container>
      </IonContent>
    </IonPage>

  );
};

export default Login;
