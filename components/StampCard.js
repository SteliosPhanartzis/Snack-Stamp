import React from "react";
import { StyleSheet, View, Image} from "react-native";

export default function StampCard({ progress, outOf, logo }){
    const stamps = []
    for(let i = 0; i < outOf; i++){
        if(i < progress)
            stamps.push(<Image style={styles.stampLogo} source={{uri:logo}}></Image>)
        else
            stamps.push(<Image style={[styles.stampLogo, styles.grayedOut]} source={{uri:logo}}></Image>)
    }
    return(
        <View style={styles.container}>
            {stamps}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: -1,
        display: "flex",
        flexWrap: "wrap",
        margin: 25,
        paddingTop: 25,
        paddingBottom: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 5,
        borderWidth: 2
    },
    stampLogo:{
        width: 45,
        height: 45,
        margin: 10,
        borderWidth: 2,
        borderRadius: 30
    },
    grayedOut: {
        opacity: 0.1
    }
  });