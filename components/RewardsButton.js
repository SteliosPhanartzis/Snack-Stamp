import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image } from "react-native";

export default function RewardsButton({company, progress, outOf, onPress = f => f}){
    return (
      <TouchableHighlight 
        style={styles.button}
        onPress={()=>onPress()}
        underlayColor="skyblue"
      >
        <View style={styles.columnAlign}>
          <Image style={styles.tinyLogo} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}}/>
          <View>
            <Text style={styles.buttonTitle}>{company}</Text>
            <Text style={styles.buttonText}>{progress}/{outOf} Cups</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  
  const styles = StyleSheet.create({
    button: {
      height: 100,
      margin: 10,
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
      alignSelf: "stretch",
      backgroundColor: "rgba(255,255,255,0.8)"
    },
    tinyLogo: {
      width: 45,
      height: 45,
      margin: 15
    },
    columnAlign: {
      flex: 1,
      flexDirection: "row"
    },
    buttonTitle:{
      fontSize: 24,
      textAlign: "left",
      marginTop: 5
    },
    buttonText:{
      fontSize: 16,
      textAlign: "left"
    }
  });