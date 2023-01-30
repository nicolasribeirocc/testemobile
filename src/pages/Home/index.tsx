import { IonContent, IonPage } from '@ionic/react';
import HomeComp from 'components/Home';
import Menu from 'components/Menu';
import React from 'react'

interface Props {
  data?: {
    status?: number,
    message?: string,
    token?: number
  } | undefined,
  email?: string | undefined
}

const Home: React.FC<Props> = ({data, email}) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Menu email={email} elemento={<HomeComp data={data} email={email} />}/>
      </IonContent>
    </IonPage>

  );
};

export default Home