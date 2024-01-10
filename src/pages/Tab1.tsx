import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import { IonButton } from '@ionic/react';
import './Tab1.css';
import React from 'react';
import { IonAlert } from '@ionic/react';
import LoginForm from '../components/LoginForm';

const Tab1: React.FC = () => {
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
        <LoginForm
          onClick={(username, password) => console.log(username, password)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
