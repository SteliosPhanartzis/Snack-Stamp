import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default function App() {
  const [rewardCompany, setRewardCompany] = useState();
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button}>
        <View>
          <Text style={styles.buttonTitle}>Starbucks</Text>
          <Text style={styles.buttonText}>6/10 Cups</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    height: 100,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "top",
    alignSelf: "stretch",
    background:"linear-gradient(150deg, white 50%,green)"
  },
  buttonTitle:{
    fontSize: 30,
    textAlign: "left"
  },
  buttonText:{
    fontSize: 16,
    textAlign: "left"
  }
});