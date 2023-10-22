/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
*/
import * as React from 'react';
import AppLoading from 'expo-app-loading';
import Routes from "./src/routes";

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Raleway_400Regular, useFonts } from '@expo-google-fonts/raleway';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Raleway_400Regular, 
    OpenSans_400Regular, 
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (       
    <Routes/>    
  );
};

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
