import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import styles from '../assets/Styles';
const Congratulations = () => {
    return (
        <View style = {styles.loginContainer}>
           
            <Text style = {styles.head}>Congrats !</Text>
            <Text style = {styles.paracCongrats}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
            <TouchableOpacity>
           <View style={styles.continueBtn}>
      <Text style={styles.title}>Continue</Text>
    </View>
    </TouchableOpacity>
        </View>
    );
};

export default Congratulations;