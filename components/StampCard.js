import React from "react";
import { StyleSheet, FlatList, Text, Image} from "react-native";

export default function StampCard({ route }){
    const { reward: reward } = route.params;
    return(
        <FlatList style={styles.container}/>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      borderWidth: 2
    }
  });