import React from 'react';
import { View, TextInput , Text , TouchableOpacity} from "react-native";
import styles from '../assets/Styles'
import Pickers from './Pickers';

const Signup = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style = {styles.loginContainer}>
             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style = {styles.cross}>X</Text>
            </TouchableOpacity>
            <Text style = {styles.loginh1}>Get Started</Text>
        <TextInput
        placeholderTextColor = "#6c022a"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Name"
        />
           <TextInput
        placeholderTextColor = "#6c022a"
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Enter Email"
        />
        <TextInput
        placeholderTextColor = "#6c022a"
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Number"
          keyboardType="numeric"
        />
        <Pickers/>
        <TouchableOpacity onPress={() => navigation.navigate('Congrats')}>
           <View style={styles.loginBtn2}>
      <Text style={styles.title}>Confirm</Text>
    </View>
    </TouchableOpacity>
    <Text style = {styles.confirm}> By Confirming you agree to all <Text style = {styles.span}>terms</Text></Text>
      </View>
    )
};

export default Signup;