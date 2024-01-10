import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import { IonButton } from '@ionic/react';
import './Tab1.css';
import React from 'react';
import { IonAlert } from '@ionic/react';

const Tab1: React.FC = () => {

  const [userName, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='container'>
          <img src='/favicon.png' width='80px' />
          <IonInput
            labelPlacement="stacked"
            value={userName}
            onIonInput={(event) => setUsername(event.target.value.toString())}
            label="Username: "
            type='email'
          >

          </IonInput>
          <IonInput
            labelPlacement="stacked"
            label="Password: "
            type='password'
            value={password}
            onIonInput={(event) => setPassword(event.target.value.toString())}
          >

          </IonInput>
          <IonButton
            expand="block"
            onClick={() => setIsOpen(true)}
          >
            Login
          </IonButton>
          <IonAlert
            isOpen={isOpen}
            header="Login"
            message={`Username: ${userName}, Password: ${password}`}
            buttons={['OK']}
            onDidDismiss={() => setIsOpen(false)}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
