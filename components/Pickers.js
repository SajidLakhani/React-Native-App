import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';
import styles from '../assets/Styles'

const Pickers = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.Pickercontainer}>
         <View style={{flexDirection:"row", width:'100%'}}>
         <Picker
        selectedValue={selectedValue}
        style={[styles.dropdown, styles.right]}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="State" value="karachi" />
        <Picker.Item label="Lahore" value="lahore" />
      </Picker>
      
      <Picker
        selectedValue={selectedValue}
        style={[styles.dropdown, styles.left]}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="City" value="Karachi" />
        <Picker.Item label="Lahore" value="Lahore" />
      </Picker>
      </View>
      
    </View>
  );
}


export default Pickers;