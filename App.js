import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

function RewardsButton({company, progress, outOf, onPress = f => f}){
  return (
    <TouchableHighlight 
      style={styles.button}
      onPress={()=>onPress("Hulu")}
      underlayColor="skyblue"
    >
      <View>
        <Text style={styles.buttonTitle}>{company}</Text>
        <Text style={styles.buttonText}>{progress}/{outOf} Cups</Text>
      </View>
    </TouchableHighlight>
  )
}

export default function App() {
  const [company, setCompany] = useState();
  return (
    <View style={styles.container}>
      <RewardsButton company="Starbucks" progress="0" outOf="10" onPress={setCompany} />
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
    height: 150,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "top",
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255,0.8)"
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