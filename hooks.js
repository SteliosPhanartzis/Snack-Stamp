import { useState, useEffect } from "react";
import { generate } from "shortid";
import { AsyncStorage } from "react-native"

export const useRewards = () => {
  const [rewards, setRewards] = useState([]);

  const loadRewards = async () => {
    const rewardData = await AsyncStorage.getItem("@RewardListStore:Rewards")
    if(rewardData){
      const rewards = JSON.parse(rewardData);
      setRewards(rewards);
    }
  }

  // Load Rewards
  useEffect(() => {
    if(rewards.length) return;
    loadRewards();
  }, []);
  
  // Saves Rewards
  useEffect(() => {
    AsyncStorage.setItem("@RewardListStore:Rewards", JSON.stringify(rewards));
  }, [rewards])

  const addReward = company => {
    let progress = 0, outOf = 10;
    const newReward = { id: generate(), company, progress, outOf };
    setRewards([newReward, ...rewards]);
  };
  return{ rewards, addReward }
};