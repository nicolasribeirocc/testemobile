import React from 'react';
import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { App } from '@capacitor/app';
import { FaUserCircle, FaAlignLeft, FaFile, FaFileAlt, FaListUl, FaPowerOff } from 'react-icons/fa'
import { useHistory } from 'react-router';
import { Container } from './style';

function Menu({elemento, email}: any) {
  const history = useHistory()

  const navigateToDashboard = () => history.push('/home')
  const navigateToAprovar = () => history.push('/aprovar-documentos')
  const navigateToAprovados = () => history.push('/documentos-aprovados')
  const navigateToReprovados = () => history.push('/reprovados')
  const logOut = () => App.exitApp()

  return (
    <Container>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              {/* <FaUserCircle style={{fontSize: 30, paddingRight: 10}}/> */}
              <span style={{fontSize: 20}}>{email}</span>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <FaAlignLeft style={{fontSize: 30, paddingRight: 10, color: '#F15922'}}/> 
              <span onClick={navigateToDashboard}>Dashboard</span>
            </IonItem>
            <IonItem>
              <FaFile style={{fontSize: 30, paddingRight: 10, color: '#F15922'}}/>
              <p onClick={navigateToAprovar}>Aprovar Documentos</p>
            </IonItem>
            <IonItem>
              <FaFileAlt style={{fontSize: 30, paddingRight: 10, color: '#F15922'}}/> 
              <p onClick={navigateToAprovados}>Documentos Aprovados</p>
            </IonItem>
            <IonItem>
              <FaListUl style={{fontSize: 30, paddingRight: 10, color: '#F15922'}}/>
              <p onClick={navigateToReprovados}>Reprovados</p>
            </IonItem>
            <IonItem>
              <FaPowerOff style={{fontSize: 30, paddingRight: 10, color: '#F15922'}}/> 
              <p onClick={logOut}>Sair</p>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader >
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Compliance</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {elemento}
        </IonContent>
      </IonPage>
    </Container>
  );
}
export default Menu;