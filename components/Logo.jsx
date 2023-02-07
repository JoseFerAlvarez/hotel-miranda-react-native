import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.letter}>H</Text>
            </View>
            <Image style={styles.lettermark} source={require("../assets/lettermark.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flexDirection: "row"
    },
    logo: {
        width: 60,
        height: 60,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    letter: {
        fontSize: 30,
        fontWeight: "700"
    },
    lettermark: {
        marginTop: 5,
        marginLeft: 10
    }
});
