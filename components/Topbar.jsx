import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Logo from "./Logo";

export default function Topbar({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <Logo style={styles.logo}></Logo>
                <View style={styles.buttons}>
                    <Pressable onPress={() => navigation.navigate('CheckForm')}>
                        <Text style={styles.button}>Check In</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Info')}>
                        <Text style={styles.button}>Info</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: "#000000"
    },
    topbar: {
        height: 80,
        marginTop: 40,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: "#FFFFFF",
        paddingLeft: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    buttons: {
        flexDirection: "row",
        marginLeft: 15
    },
    button: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: "600"
    }
});
