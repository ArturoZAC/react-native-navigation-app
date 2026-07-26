import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';

import './global.css';
import { SafeAreaProvider /* , SafeAreaView  */ } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Montserrat-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      {/* <Stack /> */}
      <Slot />
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
};

export default RootLayout;
