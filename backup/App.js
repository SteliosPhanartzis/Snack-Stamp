
import React, { useState } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import RewardCard from "./components/RewardCard"
import RewardForm from "./components/RewardForm"
import { useRewards } from "./hooks";

export default function App() {
  const [reward, setReward] = useState("Starbucks");
  const { rewards, addReward } = useRewards();
  return (
    <>
      <RewardForm onNewReward={addReward} />
      <FlatList style={[styles.container]}
        data={rewards}
        renderItem={({item}) => {
          return (
              <RewardCard
                key={item.id}  
                reward={item.reward}
                onPress={() =>{}}
              />
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
