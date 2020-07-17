import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import RewardsButton from "./RewardsButton";

export default function RewardsList({ navigation }) {
  // const [company, addCompany] = useState();
  // Wait for stored rewards or intake from json
  let company = 
  [{
    "id":1,
    "company": "New Town Tea",
    "progress": 3,
    "outOf": 10
  },
  {
    "id":2,
    "company": "Mama's Arepa's",
    "progress": 6,
    "outOf": 10
  },
  {},
  {},{},{},{},{},{},{}]
  return (
    <FlatList 
      style={styles.container}
      data={company}
      renderItem={({item}) => {
        return (
          <RewardsButton key={item.id} company={item.company} progress={item.progress} outOf={item.outOf} onPress={() => {}} />
        )
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    marginTop: "15%"
  }
});