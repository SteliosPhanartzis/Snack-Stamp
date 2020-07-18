import React, { useState, useRef } from 'react'
import { StyleSheet, View, TextInput, Button } from "react-native"
import { useRewards } from "../hooks";

export default function RewardForm() {
  const [inputValue, setValue] = useState("");
  const { rewards, addReward } = useRewards();
  const input = useRef();
    return (
        <View style = {styles.container}>
            <TextInput
              ref={input} 
              style={styles.txtInput}
              value={inputValue}
              onChangeText={setValue} 
              autoCapitalize="none"
              placeholder="enter a reward..." 
            />
            <Button title="add" 
              onPress={() => {
                input.current.blur();
                addReward(inputValue);
                setValue("")
              }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white"
    },
    txtInput: {
      flex: 1,
      borderWidth: 2,
      fontSize: 20,
      margin: 5,
      borderRadius: 5,
      padding: 5
    }
})