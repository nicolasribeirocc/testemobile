import { IonContent, IonPage } from '@ionic/react';
import AprovadosComp from 'components/Aprovados';
import Menu from 'components/Menu';
import React, { Dispatch, SetStateAction } from 'react'

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

const Aprovados: React.FC<Props>= ({data, email, setEmail, setSenha, setData}) => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Menu elemento={<AprovadosComp data={data} />} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData}/>
      </IonContent>
    </IonPage>

  );
};

export default Aprovados