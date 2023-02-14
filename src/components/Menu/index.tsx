import React, { Dispatch, ReactElement, SetStateAction } from 'react';
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
import { FaAlignLeft, FaFile, FaFileAlt, FaListUl, FaPowerOff } from 'react-icons/fa'
import { useHistory } from 'react-router';
import { Container } from './style';

type Data = {
  status?: number,
  message?: string,
  token?: number
}
interface Props {
  elemento: ReactElement<any, any>,
  email: string | undefined,
  setEmail: Dispatch<SetStateAction<string | undefined>>,
  setSenha: Dispatch<SetStateAction<string | undefined>>,
  setData: Dispatch<React.SetStateAction<Data | string | undefined>>,
  setVerificado?: Dispatch<React.SetStateAction<boolean>>
}

function Menu({elemento, email, setEmail, setSenha, setData, setVerificado}: Props ) {
  const history = useHistory()

  const navigateToDashboard = () => history.push('/home')
  const navigateToAprovar = () => history.push('/aprovar-documentos')
  const navigateToAprovados = () => history.push('/documentos-aprovados')
  const navigateToReprovados = () => history.push('/reprovados')
  const logOut = () => {
    setEmail('')
    setSenha('') 
    setData('')
    if(setVerificado) {
      setVerificado(false)
    }
    history.push('/')
  }

  return (
    <Container>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar mode='ios'>
            <IonTitle>
              <span>{email}</span>
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
        <IonContent className="ion-padding elemento">
          {elemento}
        </IonContent>
      </IonPage>
    </Container>
  );
}
export default Menu;