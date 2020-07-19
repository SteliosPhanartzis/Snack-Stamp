import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import RewardDeleteAlert from "./RewardDeleteAlert"
import StampCard from "./StampCard";

export default function RewardDetails({ route }) {
    const { reward: name } = route.params;
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.detailsText}>{name.company}</Text>
                    <StampCard progress={name.progress} outOf={name.outOf} logo={name.logo}/>
                    <Text style={styles.detailsText}>{name.progress} / {name.outOf} stamps collected</Text>
                </View>
                <Image style={styles.barcode} source={{uri:"https://i.ytimg.com/vi/pejCtEKRjZ4/maxresdefault.jpg"}} />
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
      borderWidth: 2,
      justifyContent: "space-around"
    },
    detailsText: {
        fontSize: 30,
        padding: 10,
        textAlign: "center"
    },
    barcode: {
        width: "70%",
        height: "15%",
    },
  });