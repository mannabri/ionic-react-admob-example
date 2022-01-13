# Monetize Your Ionic React App Using Google Admob

Create a new Ionic project.

```
ionic start ionic-react-admob-example tabs --type=react
```

Check if the app runs in the browser.

```
ionic serve
```

Add ios and build the project for it.

```
ionic capacitor add ios
ionic capacitor build ios
```

[AdMob Community Plugin](https://github.com/capacitor-community/admob)

Install the plugin.

```
npm install --save @capacitor-community/admob
```

Update Capacitor plugins in your iOS project.

```
ionic capacitor update ios
```

iOS configuration

Add the following in the `ios/App/App/info.plist` file inside of the outermost `<dict>`:

```xml
<key>GADIsAdManagerApp</key>
<true/>
<key>GADApplicationIdentifier</key>
<string>[APP_ID]</string>
<key>SKAdNetworkItems</key>
<array>
  <dict>
    <key>SKAdNetworkIdentifier</key>
    <string>cstr6suwn9.skadnetwork</string>
  </dict>
</array>
<key>NSUserTrackingUsageDescription</key>
<string>[Why you use NSUserTracking. ex: This identifier will be used to deliver personalized ads to you.]</string>
Don't forget to replace [APP_ID] by your AdMob application Id.
```

Add the following in the `App.tsx` file inside of the `App` function body:

```tsx
useEffect(() => {
  AdMob.initialize({
    requestTrackingAuthorization: true,
  });
  const options: BannerAdOptions = {
    adId: 'ca-app-pub-3940256099942544/2934735716', // demo ad unit id
    adSize: BannerAdSize.BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    margin: 0,
    isTesting: true,
  };
  AdMob.showBanner(options);
}, []);
```

Make sure to use a demo ad unit from Google:
https://developers.google.com/admob/ios/test-ads

Build the Ionic project for ios

```
ionic capacitor build ios
```

Run a simulator device to see the ad.

![bottom banner app](./images/bottom-banner-initial.png)


Problem: bottom toolbar is hidden by ad overlay.

Possible solution: refactor toolbar
