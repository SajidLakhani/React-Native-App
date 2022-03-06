import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions } from 'react-native';
import style from './assets/Styles'
import Login from './components/Login';
import SplashScreen from './components/SplashScreen';

export default function App() {
  return (
    <View style={style.container}>
      <SplashScreen/>
      <Login/>
    </View>
  );
}

