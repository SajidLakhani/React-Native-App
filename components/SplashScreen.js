import React from 'react';
import { View, Text, Pressable } from 'react-native';
import style from '../assets/Styles'

const SplashScreen = () => {
    return (
        <View>
            <View style = {style.square}></View>
           <Text style = {style.h1}>ELYA</Text>
           <Text style = {style.para}>All Your Finances Inside A Fancy App</Text>
           <Pressable style={style.loginBtn}>
      <Text style={style.title}>Login</Text>
    </Pressable>
    <Pressable style={style.signupBtn}>
      <Text style={style.title}>Signup</Text>
    </Pressable>
        </View>
    );
};

export default SplashScreen;