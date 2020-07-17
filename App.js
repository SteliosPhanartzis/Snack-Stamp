import React from "react";
import RewardsList from "./components/RewardsList";
// import ColorDetails from "./components/ColorDetails";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
          name="Home" 
          options={{ title: "Rewards List" }}
          component={RewardsList}
        />
      </Navigator>
    </NavigationContainer>
  );
}
