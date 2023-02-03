import React, { useEffect, MouseEvent, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { App as capApp } from '@capacitor/app'
import { Route, Switch } from 'react-router-dom';
import { IonApp, setupIonicReact, useIonAlert } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import axios from 'axios';
import { NativeBiometric } from 'capacitor-native-biometric'

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

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

type Data = {
  status?: number,
  message?: string,
  toke?: number
}

const App: React.FC = () => {
  const [ data, setData ] = useState<Data | any>()
  const [ email, setEmail ] = useState<any>()
  const [ senha, setSenha ] = useState<any>()
  const [ verificado, setVerificado ] = useState<any>()

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

  useEffect(() => {
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
            capApp.exitApp();
          } 
        } 
      });
    }

    const performBiometricVerificatin = async () => {
      const result = await NativeBiometric.isAvailable();
    
      if(!result.isAvailable) return;
    
      const verified = await NativeBiometric.verifyIdentity({
        reason: "For easy log in",
        title: "Log in",
        subtitle: "Maybe add subtitle here?",
        description: "Maybe a description too?",
      })
        .then(() => true)
        .catch(() => false);
    
      if(!verified) return;

      if(verified) {
        setEmail('teste')
        setSenha('teste')
        setVerificado(verified)
      }
    }
    performBiometricVerificatin()
  }, []);
  
  return (
  <IonApp>
    <IonReactRouter>
      <Switch>
        <Route exact path="/">
          <Login data={data} setEmail={setEmail} setSenha={setSenha} verificado={verificado} handleSubmit={handleSubmit}/>
        </Route>
        <Route exact path="/home">
          <Home data={data} email={email} setEmail={setEmail} setSenha={setSenha} setData={setData} setVerificado={setVerificado}/>
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
