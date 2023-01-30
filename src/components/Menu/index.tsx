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
import { FaUserCircle, FaAlignLeft, FaFile, FaFileAlt, FaListUl, FaPowerOff } from 'react-icons/fa'
import { useHistory } from 'react-router';
import { Container } from './style';

function Menu({elemento, email}: any) {
  const history = useHistory()

  const navigateToDashboard = () => history.push('/home')
  const navigateToAprovar = () => history.push('/aprovar-documentos')
  const navigateToAprovados = () => history.push('/documentos-aprovados')
  const navigateToReprovados = () => history.push('/home/reprovados')
  const logOut = () => history.push('/')

  return (
    <Container>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <FaUserCircle />
              {email}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <FaAlignLeft /> 
              <span onClick={navigateToDashboard}>Dashboard</span>
            </IonItem>
            <IonItem>
              <FaFile />
              <p onClick={navigateToAprovar}>Aprovar Documentos</p>
            </IonItem>
            <IonItem>
              <FaFileAlt /> 
              <p onClick={navigateToAprovados}>Documentos Aprovados</p>
            </IonItem>
            <IonItem>
              <FaListUl />
              <p onClick={navigateToReprovados}>Reprovados</p>
            </IonItem>
            <IonItem>
              <FaPowerOff /> 
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