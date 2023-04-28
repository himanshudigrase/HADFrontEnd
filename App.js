import React, { useState, useEffect, useCallback } from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './context/AuthContext';
import AppNav from './navigator/AppNav';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import {PermissionsAndroid} from 'react-native';


NativeWindStyleSheet.setOutput({
  default: "native",
});
const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  //PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  const requestUserPermission = async () => {
    //PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
   
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }




  useEffect(() => {
    async function prepare() {
      try {
       
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'inter-black': require('./assets/fonts/Inter-Black.ttf'),
          'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
          'inter-extrabold': require('./assets/fonts/Inter-ExtraBold.ttf'),
          'inter-extralight': require('./assets/fonts/Inter-ExtraLight.ttf'),
          'inter-light': require('./assets/fonts/Inter-Light.ttf'),
          'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
          'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
          'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf')

        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. 
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Artificially delay for two seconds to simulate a slow loading
        // experience. 
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (requestUserPermission()) {
         
          // return fcm token for the device
          messaging().getToken().then(token => {
            console.log(token);
          })
        } else console.log('failed');


        // Check whether an initial notification is available
        messaging()
          .getInitialNotification()
          .then(async(remoteMessage) => {
            if (remoteMessage) {
              console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
              );
            }
          });

        // Assume a message-notification contains a "type" property in the data payload of the screen to open

        messaging().onNotificationOpenedApp(async(remoteMessage) => {
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
        });

        // Register background handler
        messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.log('Message handled in the background!', remoteMessage);
        });


        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('Congratulations!!', JSON.stringify(remoteMessage.notification.body));
        });
    
        return unsubscribe;

      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();


    

  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  return (
    <AuthProvider>
      <PaperProvider>

        <AppNav />

      </PaperProvider>
    </AuthProvider>


  );


}

