import {
  AdMob,
  BannerAdOptions,
  BannerAdPosition,
  BannerAdSize,
} from '@capacitor-community/admob';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [adPosition, setAdPosition] = useState<BannerAdPosition>(
    BannerAdPosition.BOTTOM_CENTER
  );
  const [adSize, setAdSize] = useState<BannerAdSize>(BannerAdSize.BANNER);
  const [margin, setMargin] = useState<number>(0);

  const showBanner = (
    adSize: BannerAdSize,
    position: BannerAdPosition,
    margin: number
  ) => {
    const options: BannerAdOptions = {
      adId: 'ca-app-pub-3940256099942544/2934735716', // demo ad unit id
      adSize: adSize,
      position: position,
      margin: margin,
      isTesting: true,
    };
    AdMob.showBanner(options);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Banner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Banner</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h1>Options</h1>
        <IonList>
          <IonItem lines="full">
            <IonLabel>Ad Position</IonLabel>
            <IonSelect
              value={adPosition}
              onIonChange={(e) => setAdPosition(e.detail.value)}
            >
              <IonSelectOption value={BannerAdPosition.TOP_CENTER}>
                Top Center
              </IonSelectOption>
              <IonSelectOption value={BannerAdPosition.CENTER}>
                Center
              </IonSelectOption>
              <IonSelectOption value={BannerAdPosition.BOTTOM_CENTER}>
                Bottom Center
              </IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="full">
            <IonLabel>Ad Size</IonLabel>
            <IonSelect
              value={adSize}
              onIonChange={(e) => setAdSize(e.detail.value)}
            >
              <IonSelectOption value={BannerAdSize.ADAPTIVE_BANNER}>
                Adaptive Banner
              </IonSelectOption>
              <IonSelectOption value={BannerAdSize.BANNER}>
                Banner
              </IonSelectOption>
              <IonSelectOption value={BannerAdSize.FULL_BANNER}>
                Full Banner
              </IonSelectOption>
              <IonSelectOption value={BannerAdSize.LARGE_BANNER}>
                Large Banner
              </IonSelectOption>
              <IonSelectOption value={BannerAdSize.LEADERBOARD}>
                Leaderboard
              </IonSelectOption>
              <IonSelectOption value={BannerAdSize.MEDIUM_RECTANGLE}>
                Medium Rectangle
              </IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="full">
            <IonLabel>Margin</IonLabel>
            <IonSelect
              value={margin}
              onIonChange={(e) => setMargin(e.detail.value)}
            >
              <IonSelectOption value={-20}>-20</IonSelectOption>
              <IonSelectOption value={-10}>-10</IonSelectOption>
              <IonSelectOption value={0}>0</IonSelectOption>
              <IonSelectOption value={10}>10</IonSelectOption>
              <IonSelectOption value={20}>20</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        <h1>Functions</h1>
        <IonButton
          expand="block"
          onClick={() => showBanner(adSize, adPosition, margin)}
        >
          Show Banner
        </IonButton>
        <IonButton expand="block" onClick={() => AdMob.hideBanner()}>
          Hide Banner
        </IonButton>
        <IonButton expand="block" onClick={() => AdMob.resumeBanner()}>
          Resume Banner
        </IonButton>
        <IonButton expand="block" onClick={() => AdMob.removeBanner()}>
          Remove Banner
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
