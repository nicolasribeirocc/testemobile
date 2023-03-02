import { IonContent, IonPage } from '@ionic/react';
import { NativeBiometric } from 'capacitor-native-biometric';
import HomeComp from 'components/Home';
import Menu from 'components/Menu';
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';

type Data = {
  status?: number,
  message?: string,
  toke?: number
}

interface Props {
  agencia: string
  email: string,
  setEmail: Dispatch<SetStateAction<string | undefined>>,
  setSenha: Dispatch<SetStateAction<string | undefined>>,
  senha: string,
  setData: Dispatch<React.SetStateAction<Data | string | undefined>>,
  setVerificado: Dispatch<React.SetStateAction<boolean>>,
  digital: boolean,
  setDigital: Dispatch<React.SetStateAction<boolean>>,
  url?: string
}

const Home: React.FC<Props> = (
  { agencia,   
    email, 
    setEmail,
    senha,
    setSenha, 
    setData, 
    setVerificado, 
    setDigital,
    digital,
    url, }) => {

    const verificacao = localStorage.getItem('digital verificada')
    const history = useHistory()

    useEffect(() => {
      if(!digital && !verificacao) {
        const performBiometricVerificatin = async () => {
          const result = await NativeBiometric.isAvailable();
        
          if(!result.isAvailable) return;
        
          const verified = await NativeBiometric.verifyIdentity({
            reason: "Complience",
            title: "Complience",
            subtitle: "Cadastre sua Digital",
            maxAttempts: 3,
          })
            .then(() => true)
            .catch(() => false);
        
          if(!verified) {
              setVerificado(false)
              // setData('')
              // history.push('/')
          }
    
          if(verified) {
            NativeBiometric.setCredentials({
              username: email,
              password: senha,
              server: "www.digital.com",
            }).then(() => {
              setDigital(true)
              localStorage.setItem('digital verificada', 'sim')
            })
          }
        }
        performBiometricVerificatin()
      }

    }, [digital, email, history, senha, setData, setDigital, setVerificado, verificacao])
  
  return (
    <Container>
      <IonPage>
        <IonContent fullscreen>
          <Menu elemento={<HomeComp agencia={agencia} url={url}/>} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData} setVerificado={setVerificado}/>
        </IonContent>
      </IonPage>
    </Container>
  );
};

const Container = styled.div`
  ion-content {--overflow: hidden}
`

export default Home