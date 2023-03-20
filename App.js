
import React, { useState,useEffect,useCallback } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { NativeWindStyleSheet } from "nativewind";
import HomeScreen from './screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login from './screens/Login';
import DemoData from './screens/DemoData';
import Signup from './screens/Signup'
import MedHistory from './screens/MedHistory';
import Dashboard from './screens/Dashboard';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { Provider as PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
NativeWindStyleSheet.setOutput({
  default: "native",
});
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'inter-black':require('./assets/fonts/Inter-Black.ttf'),
          'inter-bold':require('./assets/fonts/Inter-Bold.ttf'),
          'inter-extrabold':require('./assets/fonts/Inter-ExtraBold.ttf'),
          'inter-extralight':require('./assets/fonts/Inter-ExtraLight.ttf'),
          'inter-light':require('./assets/fonts/Inter-Light.ttf'),
          'inter-medium':require('./assets/fonts/Inter-Medium.ttf'),
          'inter-regular':require('./assets/fonts/Inter-Regular.ttf'),
          'inter-semibold':require('./assets/fonts/Inter-SemiBold.ttf')
        
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
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
      <NavigationContainer  onLayout={onLayoutRootView}>
         <PaperProvider>
          <Stack.Navigator  onLayout={onLayoutRootView}>       
            <Stack.Screen  name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="DemoData" component={DemoData}/>
            <Stack.Screen name="MedHistory" component={MedHistory}/>
            <Tab.Navigator></Tab.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard}/>         
           </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    );
  
  
}

