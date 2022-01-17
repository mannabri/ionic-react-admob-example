import { AdMob, AdOptions } from '@capacitor-community/admob';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab1.css';

const Tab2: React.FC = () => {
  const showInterstitial = async () => {
    const options: AdOptions = {
      adId: 'ca-app-pub-3940256099942544/4411468910', // demo ad unit id
      isTesting: true,
    };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Interstitial</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Interstitial</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton expand="block" onClick={showInterstitial}>
          Show Interstitial
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
