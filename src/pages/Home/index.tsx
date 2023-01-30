import { IonContent, IonPage } from '@ionic/react';
import HomeComp from 'components/Home';
import Menu from 'components/Menu';
import React from 'react'

type Data = {
  status?: number,
  message?: string,
  toke?: number
}

interface Props {
  data?: Data | undefined,
  email?: string | undefined,
}

const Home: React.FC<Props> = ({data, email}) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Menu elemento={<HomeComp data={data} />} email={email} />
      </IonContent>
    </IonPage>

  );
};

export default Home