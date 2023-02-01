import { Route, Switch } from 'react-router-dom';
import { IonApp, setupIonicReact, useIonAlert } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';
import Home from 'pages/Home';
import { MouseEvent, useState } from 'react';
import axios from 'axios';
import AprovarDocumentos from 'pages/AprovarDocumentos';
import Aprovados from 'pages/DocumentosAprovados';
import Reprovados from 'pages/Reprovados';
import AnalisePerfil from 'pages/AnalisePerfil';

setupIonicReact();

type Data = {
  status?: number,
  message?: string,
  toke?: number
}


const App: React.FC = () => {
  const [ data, setData ] = useState<Data | any>()
  const [ email, setEmail ] = useState<string | undefined>()
  const [ senha, setSenha ] = useState<string | undefined>()

  const [erro] = useIonAlert() 

  const handleSubmit = (e:  MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    axios.get(`https://contause.digital/valida/login.php?login=${email}&senha=${senha}`)
   .then((response) => {
      setData(response.data)
      if(response.data.status === 0) {
        erro({
          header: 'Login Incorreto',
          message: 'Insira dados válidos',
          buttons: ['OK'],
        })
      } 
    })
    .catch((error) => {
      console.log(error);
    })    
  }
  
  return (
  <IonApp>
    <IonReactRouter>
      <Switch>
        <Route exact path="/">
          <Login data={data} setEmail={setEmail} setSenha={setSenha} handleSubmit={handleSubmit}/>
        </Route>
        <Route exact path="/home">
          <Home data={data} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData}/>
        </Route>
        <Route exact path={'/aprovar-documentos'}>
          <AprovarDocumentos data={data} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData}/>
        </Route>
        <Route exact path={'/documentos-aprovados'}>
          <Aprovados data={data} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData}/>
        </Route>
        <Route exact path={'/reprovados'}>
          <Reprovados data={data} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData}/>
        </Route>
        <Route path={'/analise-perfil/:id'}>
          <AnalisePerfil data={data} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData}/>
        </Route>
      </Switch>
    </IonReactRouter>
  </IonApp>
)
};

export default App;
