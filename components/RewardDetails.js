import React from "react";
import { StyleSheet, View, Text, Image, Button, Alert} from "react-native";
import RewardDeleteAlert from "./RewardDeleteAlert"

export default function RewardDetails({ route }) {
    const { reward: name } = route.params;
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.detailsText}>{name.company}</Text>
                <Image style={styles.barcode} source={{uri:"https://i.ytimg.com/vi/pejCtEKRjZ4/maxresdefault.jpg"}} />
                <Text style={styles.detailsText}>{name.progress} / {name.outOf} stamps collected</Text>
            </View>
            <Button title="Delete Reward" onPress = {RewardDeleteAlert}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      borderRadius: 10,
      borderWidth: 2
    },
    detailsText: {
        fontSize: 30,
        padding: 10,
        textAlign: "center"
    },
    barcode: {
        width: "70%",
        height: "15%"
    },
  });