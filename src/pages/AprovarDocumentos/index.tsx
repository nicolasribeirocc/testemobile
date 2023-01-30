import { IonContent, IonPage } from '@ionic/react';
import AprovarComp from 'components/Aprovar';
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

const AprovarDocumentos: React.FC<Props>= ({data, email}) => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Menu elemento={<AprovarComp data={data} />} email={email}/>
      </IonContent>
    </IonPage>

  );
};

export default AprovarDocumentos