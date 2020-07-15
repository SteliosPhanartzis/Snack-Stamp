import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import RewardsButton from "./components/RewardsButton";

export default function App() {
  const [company, setCompany] = useState();
  return (
    <ScrollView style={styles.container}>
      <RewardsButton company="Starbucks" progress="0" outOf="10" onPress={setCompany} />
    </ScrollView>
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
