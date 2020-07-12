import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default function RewardsCard({company, progress, outOf, onPress = f => f}){
  return (
    <TouchableHighlight 
      style={styles.button}
      onPress={()=>onPress()}
      underlayColor="skyblue"
    >
      <View>
        <Text style={styles.buttonTitle}>{company}</Text>
        <Text style={styles.buttonText}>{progress}/{outOf} Cups</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 150,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
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
