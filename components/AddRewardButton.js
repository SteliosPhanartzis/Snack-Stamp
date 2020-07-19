import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { StyleSheet, Text} from "react-native";

export default function AddRewardButton ({navigation = f => f}){
    return (
        <TouchableHighlight 
            style={styles.addReward} 
            onPress={() => navigation.navigate("Add Reward")}
            underlayColor="skyblue">
                <Text style={styles.addText}>+</Text>
        </TouchableHighlight> 
    )
}

const styles = StyleSheet.create({
    addReward: {
        width: 50,
        height: 50,
        margin: 10,
        // borderRadius: 25,
        // borderWidth: 2,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    addText: {
      fontSize: 24,
      fontWeight: "bold",
    }
  });