import React, { Dispatch, MouseEvent, SetStateAction, useEffect } from 'react'
import { IonContent, IonPage } from '@ionic/react';
import { Container } from './style';
import Form from 'components/Form';
import Logo from 'components/Form/logo';
import { NativeBiometric } from 'capacitor-native-biometric';
import { useHistory } from 'react-router';

interface Props {
  data?: {
    status?: number,
    message?: string,
    token?: number
  },
  setEmail: Dispatch<SetStateAction<string | undefined> | null>,
  setSenha: Dispatch<SetStateAction<string | undefined> | null>,
  setAgencia: Dispatch<SetStateAction<string | undefined> | null>,
  setData: Dispatch<SetStateAction<any>>,
  setVerificado: Dispatch<SetStateAction<any> | null>,
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void,
  verificado: boolean,
  digital: boolean,
  auxDigital: boolean,
  setAuxDigital: Dispatch<SetStateAction<boolean>>,
}

const Login: React.FC<Props> = ({data, setEmail, setSenha, setAgencia, setData, setVerificado, handleSubmit, verificado, digital, auxDigital}) => {
  const history = useHistory()
  const verificacao = localStorage.getItem('digital verificada')

  useEffect(() => {
    if(digital || verificacao) {
      const performBiometricVerificatin = async () => {
        const result = await NativeBiometric.isAvailable();
      
        if(!result.isAvailable) return;

        if(auxDigital) return
      
        const verified = await NativeBiometric.verifyIdentity({
          reason: "Complience",
          title: "Desbloqueie seu celular",
        })
        .then(() => true)
        .catch(() => false);
      
        if(!verified) return;

        if(verified) {
          await NativeBiometric.getCredentials({
            server: "www.digital.com",
          })
          .then(() => {
            setEmail(localStorage.getItem('email'))
            setSenha(localStorage.getItem('senha'))
            setAgencia(localStorage.getItem('agencia'))
            history.push('/home')
          })
        }
      }
      performBiometricVerificatin()
    }
  }, [auxDigital, digital, history, setAgencia, setEmail, setSenha, verificacao])
 
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
