import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions } from 'react-native';
import style from './assets/Styles'
import Login from './components/Login';
import SplashScreen from './components/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './components/Signup';
import Congratulations from './components/Congratulations';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Home" component={SplashScreen}/>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Signup" component={Signup}/>
        <Stack.Screen name = "Congrats" component={Congratulations}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

