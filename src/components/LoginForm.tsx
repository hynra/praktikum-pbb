import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { IonAlert } from '@ionic/react';
import './LoginForm.css'

const LoginForm = (props) => {

    const [userName, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isOpen, setIsOpen] = React.useState(false);

    return (
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
                id='submit'
                onClick={() => {
                    if (userName !== '' && password !== '') {
                        setIsOpen(true)
                        props.onClick(userName, password)
                    }
                }}
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
            {password === '' && userName === '' && <IonToast trigger="submit" message="username or password empty!" duration={5000}></IonToast>}
        </div>
    )

}

export default LoginForm