import React from 'react';
import { View, Text,  Button , TouchableOpacity} from 'react-native';
import style from '../assets/Styles'
const SplashScreen = ({navigation}) => {
    return (
        <View style = {style.container}>
            <View style = {style.square}></View>
           <Text style = {style.h1}>ELYA</Text>
           <Text style = {style.para}>All Your Finances Inside A Fancy App</Text>
           {/* <Button
          title="Go to Notifications"
          onPress={() => navigation.navigate('Login')}
        /> */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
           <View style={style.loginBtn}>
      <Text style={style.title}>Login</Text>
    </View>
    </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
           <View style={style.signupBtn}>
      <Text style={style.title}>Signup</Text>
    </View>
    </TouchableOpacity>
  
        </View>
    );
};

export default SplashScreen;

