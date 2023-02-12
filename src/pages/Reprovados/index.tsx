import { IonContent, IonPage } from '@ionic/react';
import ReprovadoComp from 'components/Reprovados';
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
  setData: Dispatch<React.SetStateAction<Data | string | undefined>>,
  agencia: string
}

const Reprovados: React.FC<Props>= ({data, email, setEmail, setSenha, setData, agencia}) => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Menu elemento={<ReprovadoComp data={data} agencia={agencia} />} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData}/>
      </IonContent>
    </IonPage>

  );
};

export default Reprovados