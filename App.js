import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import RewardsCard from "./components/RewardsCard"

export default function App() {
  const [company, setCompany] = useState();
  return (
    <View style={styles.container}>
      <RewardsCard company="Starbucks" progress="0" outOf="10" onPress={()=>{}} />
      <RewardsCard company="Kung Fu Tea" progress="4" outOf="10" onPress={()=>{}} />
      <RewardsCard company="Momo's" progress="8" outOf="10" onPress={()=>{}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
