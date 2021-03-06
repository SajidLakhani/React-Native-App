import React from 'react';
import { View, TextInput , Text , TouchableOpacity} from "react-native";
import  Switch from '../components/Switch';
import styles from '../assets/Styles'

const Login = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style = {styles.loginContainer}>
             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style = {styles.cross}>X</Text>
            </TouchableOpacity>
            <Text style = {styles.loginh1}>Login</Text>
        <TextInput
        placeholderTextColor = "#6c022a"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Number"
          keyboardType="numeric"
        />
        <TextInput
        placeholderTextColor = "#6c022a"
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Password"
          keyboardType="numeric"
        />
        <Switch/>
        <TouchableOpacity>
           <View style={styles.loginBtn2}>
      <Text style={styles.title}>Login</Text>
    </View>
    </TouchableOpacity>
      </View>
    )
};

export default Login;