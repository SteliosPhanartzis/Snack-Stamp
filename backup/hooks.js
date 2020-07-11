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

  // Load Colors
  useEffect(() => {
    if(rewards.length) return;
    loadRewards();
  }, []);
  // Saves Colors
  useEffect(() => {
    AsyncStorage.setItem("@RewardListStore:Rewards", JSON.stringify(rewards));
  }, [rewards])

  const addReward = reward => {
    const newReward = { id: generate(), reward };
    setRewards([newReward, ...reward]);
  };
  return{ rewards, addReward }
};