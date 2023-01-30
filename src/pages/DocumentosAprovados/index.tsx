import { IonContent, IonPage } from '@ionic/react';
import AprovadosComp from 'components/Aprovados';
import Menu from 'components/Menu';
import React from 'react'

interface Props {
  data?: {
    status?: number,
    message?: string,
    toke?: number,
    agency?: string,
  }
}

const Aprovados: React.FC<Props>= ({data}) => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Menu elemento={<AprovadosComp data={data} />} />
      </IonContent>
    </IonPage>

  );
};

export default Aprovados