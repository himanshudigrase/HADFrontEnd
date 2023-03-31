import React, { useState, useEffect, useCallback } from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './context/AuthContext';
import AppNav from './navigator/AppNav';

NativeWindStyleSheet.setOutput({
  default: "native",
});
const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

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

