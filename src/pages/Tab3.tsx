import { AdMob, AdOptions, RewardAdOptions } from '@capacitor-community/admob';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab1.css';

const Tab3: React.FC = () => {
  const showRewardVideo = async () => {
    const options: RewardAdOptions = {
      adId: 'ca-app-pub-3940256099942544/1712485313', // demo ad unit id
      isTesting: true,
    };
    await AdMob.prepareRewardVideoAd(options);
    await AdMob.showRewardVideoAd();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reward Video</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reward Video</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton expand="block" onClick={showRewardVideo}>
          Show Reward Video
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
