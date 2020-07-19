import React from "react";
import RewardsList from "./components/RewardsList";
import RewardsForm from "./components/RewardsForm";
import RewardDetails from "./components/RewardDetails";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import AddRewardButton from "./components/AddRewardButton";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
          name="Home" 
          options={
            ({navigation}) => ({
              title: "Rewards List",
              headerRight: () => (
              <AddRewardButton navigation = { navigation }/>
              ),
            })
          }
          component={RewardsList}
        />
        <Screen 
          name="Add Reward" 
          options={{ title: "Add Reward" }}
          component={RewardsForm}
        />
        <Screen 
          name="Details" 
          options={{ title: "Reward Details" }}
          component={RewardDetails}
        />
      </Navigator>
    </NavigationContainer>
  );
}