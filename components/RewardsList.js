import React, { useState } from "react";
import { StyleSheet, FlatList, Text} from "react-native";
import RewardsButton from "./RewardsButton";
import { useRewards } from "../hooks";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function RewardsList({ navigation }) {
  const [company, addCompany] = useState();
  // Wait for stored rewards or intake from json
  const { rewards, addReward } = useRewards();

  return (
      <>
        <FlatList 
          style={styles.container}
          data={rewards}
          renderItem={({item}) => {
              return (
              <RewardsButton key={item.id} 
                company={item.company} 
                progress={item.progress} 
                outOf={item.outOf}
                logo={item.logo} 
                onPress={() => navigation.navigate("Details", { reward: item })} 
              />
              )
          }}
        />
        {/* <TouchableHighlight 
            style={styles.addReward} 
            onPress={() => navigation.navigate("Add Reward", addReward)}
            underlayColor="skyblue">
                <Text style={styles.addText}>+</Text>
        </TouchableHighlight> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
  },
  addReward: {
      width: 50,
      height: 50,
      margin: 10,
      borderRadius: 25,
      borderWidth: 2,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
  },
  addText: {
    fontSize: 24,
    fontWeight: "bold",
  }
});