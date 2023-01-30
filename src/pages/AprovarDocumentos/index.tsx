import { IonContent, IonPage } from '@ionic/react';
import AprovarDocumentosComp from 'components/Aprovados';
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

const AprovarDocumentos: React.FC<Props>= ({data}) => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Menu elemento={<AprovarDocumentosComp data={data} />} />
      </IonContent>
    </IonPage>

  );
};

export default AprovarDocumentos