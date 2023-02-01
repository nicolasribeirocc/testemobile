import { IonContent, IonPage } from '@ionic/react';
import AnaliseComp from 'components/Analise';
import Menu from 'components/Menu';
import React, { Dispatch, SetStateAction } from 'react'
import { useParams } from 'react-router';

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
  setData: Dispatch<React.SetStateAction<Data | string | undefined>>
}

const AnalisePerfil: React.FC<Props | any>= ({ email, setEmail, setSenha, setData}) => {
  let id = useParams()

  return (
    <IonPage>
      <IonContent fullscreen>
        <Menu elemento={<AnaliseComp id={id} />} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData}/>
      </IonContent>
    </IonPage>

  );
};

export default AnalisePerfil