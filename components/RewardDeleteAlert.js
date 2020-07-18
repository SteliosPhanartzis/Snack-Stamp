import { Alert } from "react-native";

export default function RewardDeleteAlert({rid}) {
    return(
        Alert.alert(
            "Delete Reward",
            "Are you sure you want to delete this reward?",
            [{
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log({rid}) }
            ],
            { cancelable: false }
        )
    )
}