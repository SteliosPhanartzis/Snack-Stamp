import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from "react-native";

export default function RewardCard({ reward, onPress = f => f }) {
  return (
    <>
      <StatusBar style="auto" />
      <TouchableHighlight style={styles.button}
        onPress={()=> onPress(reward)}
        underlayColor="skyblue"
      >
        <View style={styles.row}>
          <View style={styles.sample}/>
          <Text style={styles.buttonText}>{reward}</Text>
        </View>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
    button: {
      width: Dimensions.get('window').width-(Dimensions.get('window').width*0.2),
      margin: 10,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      alignSelf: "stretch",
      backgroundColor:"rgba(255,255,255,0.8)"
    },
    buttonText: {
      fontSize: 30,
      textAlign: "center"
    },
    sample: {
      backgroundColor: "green",
      height: 100,
      width: 20,
      borderRadius: 10,
      margin: 5
    },
    row: {
      flexDirection: "row",
      alignItems: "center"
    }
  });
