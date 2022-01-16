# Monetize Your Ionic React App Using Google Admob

# Content

1. Project Setup
2. Banner

# 1. Project Setup

Create a new Ionic project and check if it runs in the browser.

```
ionic start ionic-react-admob-example tabs --type=react
ionic serve
```

Install the [Admob Community Plugin](https://github.com/capacitor-community/admob).

```
npm install --save @capacitor-community/admob
```

Add the native ios project.

```
ionic capacitor add ios
```

Add the following in the `ios/App/App/info.plist` file inside of the outermost `<dict>`
and replace [APP_ID] by your AdMob application Id.

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
```

# 2. Banner

Let's start with a minium setup and create a regular banner at the bottom of the app.

Add the following code snippet in the `App.tsx` file inside of the `App` function body:

```tsx
useEffect(() => {
  AdMob.initialize({
    requestTrackingAuthorization: true,
  });
}, []);
```

This will initialize AdMob for the whole app.

Add the following code snippet in the `Tab1.tsx` file inside of the `Tab1` function body:

```tsx
useEffect(() => {
  const options: BannerAdOptions = {
    adId: 'ca-app-pub-3940256099942544/2934735716', // demo ad unit id
    adSize: BannerAdSize.BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    isTesting: true,
  };
  AdMob.showBanner(options);
}, []);
```

Important: Do not use a real ad unit id during development! Instead, you can use a demo id from Google: https://developers.google.com/admob/ios/test-ads

Now, it's time to build the native ios project.

```
ionic capacitor build ios
```

Open XCode and run a simulator device to see it in action. It may take a couple of seconds for the ad to appear.

![bottom banner app](./images/bottom-banner-initial.png)

Well done, you've created your first ad!

Obviously, there is more to explore. There are functions to _show_, _hide_, _resume_ and _remove_ the banner and options for the banner _size_ and _position_.

Get the example app code and try out the different possibilities.

TODO: Add example images of different banners

Further Readings:

Google's guidelines on ad placement.
https://support.google.com/admob/answer/2936217?hl=de&ref_topic=2936214&visit_id=637777030182995119-279234529&rd=1
