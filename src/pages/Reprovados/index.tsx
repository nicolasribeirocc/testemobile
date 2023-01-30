import { IonContent, IonPage } from '@ionic/react';
import ReprovadoComp from 'components/Reprovados';
import Menu from 'components/Menu';
import React from 'react'

interface Props {
  data?: {
    status?: number,
    message?: string,
    toke?: number,
    agency?: string,
  },
  email?: string | undefined,
}

const Reprovados: React.FC<Props>= ({data, email}) => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Menu elemento={<ReprovadoComp data={data} />} email={email}/>
      </IonContent>
    </IonPage>

  );
};

export default Reprovados