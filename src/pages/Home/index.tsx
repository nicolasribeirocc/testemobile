import { IonContent, IonPage } from '@ionic/react';
import { NativeBiometric } from 'capacitor-native-biometric';
import HomeComp from 'components/Home';
import Menu from 'components/Menu';
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useHistory } from 'react-router';

type Data = {
  status?: number,
  message?: string,
  toke?: number
}

interface Props {
  data: Data | undefined,
  email: string,
  setEmail: Dispatch<SetStateAction<string | undefined>>,
  setSenha: Dispatch<SetStateAction<string | undefined>>,
  senha: string,
  setData: Dispatch<React.SetStateAction<Data | string | undefined>>,
  setVerificado: Dispatch<React.SetStateAction<boolean>>,
  digital: boolean,
  setDigital: Dispatch<React.SetStateAction<boolean>>
}

const Home: React.FC<Props> = (
  { data, 
    email, 
    setEmail,
    senha,
    setSenha, 
    setData, 
    setVerificado, 
    setDigital, 
    digital, }) => {

    const verificacao = localStorage.getItem('digital verificada')
    const history = useHistory()

    useEffect(() => {
      if(!digital && !verificacao) {
        const performBiometricVerificatin = async () => {
          const result = await NativeBiometric.isAvailable();
        
          if(!result.isAvailable) return;
        
          const verified = await NativeBiometric.verifyIdentity({
            reason: "Complience",
            title: "Cadastre seu login",
            maxAttempts: 3,
          })
            .then(() => true)
            .catch(() => false);
        
          if(!verified) {
              setVerificado(false)
              setData('')
              history.push('/')
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
    <IonPage>
      <IonContent fullscreen>
        <Menu elemento={<HomeComp data={data} />} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData} setVerificado={setVerificado}/>
      </IonContent>
    </IonPage>

  );
};

export default Home