import React, { Dispatch, MouseEvent, SetStateAction } from 'react'
import { IonContent, IonPage } from '@ionic/react';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio'
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
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}

const Login: React.FC<Props> = ({data, setEmail, setSenha, handleSubmit}) => {
  FingerprintAIO.registerBiometricSecret({
    description: "Some biometric description",
    secret: "my-super-secret",
    invalidateOnEnrollment: true,
    disableBackup: true, // always disabled on Android
  })
  
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
