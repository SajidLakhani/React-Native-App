import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import styles from '../assets/Styles'
const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.switchContainer}>
        <View style={{flexDirection:"row"}}>
      <Switch
        trackColor={{ false: "#a36578", true: "#a36578" }}
        thumbColor={isEnabled ? "#be2e63" : "#fff"}
        ios_backgroundColor="#a36578"
        onValueChange={toggleSwitch}
        
        value={isEnabled}
      />
      <Text style={styles.switchPara}>Save My Info?</Text>
      </View>
    </View>
  );
}

export default App;