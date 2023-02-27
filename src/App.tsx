import React, { MouseEvent, useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { App as capApp } from '@capacitor/app'
import { Route, Switch } from 'react-router-dom';
import { IonApp, setupIonicReact, useIonAlert } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import axios from 'axios';
import { ScreenOrientation, OrientationType } from '@capawesome/capacitor-screen-orientation';

import Login from './pages/Login';
import Home from 'pages/Home';
import AprovarDocumentos from 'pages/AprovarDocumentos';
import Aprovados from 'pages/DocumentosAprovados';
import Reprovados from 'pages/Reprovados';
import AnalisePerfil from 'pages/AnalisePerfil';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

type Data = {
  status?: number,
  message?: string,
  toke?: number
}

const App: React.FC = () => {
  ScreenOrientation.lock({ type: OrientationType.PORTRAIT });
  const [ data, setData ] = useState<Data | any>()
  const [ email, setEmail ] = useState<any>()
  const [ senha, setSenha ] = useState<any>()
  const [ verificado, setVerificado ] = useState<any>()
  const [ digital, setDigital ] = useState<any>(false)
  const [ agencia, setAgencia ] = useState<any>(false)
  const [ auxDigital, setAuxDigital ] = useState(false)
  //
  
  const [erro] = useIonAlert() 

  const handleSubmit = (e:  MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    axios.get(`https://contause.digital/valida/login.php?login=${email}&senha=${senha}`)
   .then((response) => {
      setData(response.data)
      setAgencia(response.data.agency)
      localStorage.setItem('agencia', response.data.agency)
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

  useEffect(() => {
    setAuxDigital(false)
    if (Capacitor.isNativePlatform()) {
      capApp.addListener("backButton", (e) => {
        if (window.location.pathname === "/") {
          let ans = window.confirm("Tem certeza?");
          if (ans) {
            capApp.exitApp()
          } 
        } else if (window.location.pathname === "/home") {
          let ans = true
          if (ans) {
            setAuxDigital(true)
            capApp.exitApp()
          } 
        } 
      });
    }
  }, [])

  return (
  <IonApp>
    <IonReactRouter>
      <Switch>
        <Route exact path="/">
          <Login 
            data={data} 
            setEmail={setEmail} 
            setSenha={setSenha} 
            setAgencia={setAgencia}
            verificado={verificado} 
            handleSubmit={handleSubmit} 
            digital={digital}
            auxDigital={auxDigital}
            setAuxDigital={setAuxDigital}
          />
        </Route>
        <Route exact path="/home">
          <Home
            agencia={agencia}
            email={email}
            setEmail={setEmail}
            senha={senha} 
            setSenha={setSenha} 
            setData={setData} 
            setVerificado={setVerificado}
            digital={digital}
            setDigital={setDigital}
          />
        </Route>
        <Route exact path='/aprovar-documentos'>
          <AprovarDocumentos 
            data={data} 
            agencia={agencia} 
            email={email} 
            setEmail={setEmail} 
            setSenha={setSenha} 
            setData={setData}
          />
        </Route>
        <Route exact path='/documentos-aprovados'>
          <Aprovados 
            data={data} 
            agencia={agencia} 
            email={email} 
            setEmail={setEmail} 
            setSenha={setSenha} 
            setData={setData}
          />
        </Route>
        <Route exact path='/reprovados'>
          <Reprovados 
            data={data} 
            agencia={agencia} 
            email={email} 
            setEmail={setEmail} 
            setSenha={setSenha} 
            setData={setData}
          />
        </Route>
        <Route path='/analise-perfil/:id'>
          <AnalisePerfil 
            data={data} 
            email={email} 
            setEmail={setEmail} 
            setSenha={setSenha} 
            setData={setData}
          />
        </Route>
      </Switch>
    </IonReactRouter>
  </IonApp>
)
};

export default App;
