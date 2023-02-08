import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import Topbar from '../components/Topbar';

export default function CheckForm({ navigation }) {
    return (
        <View style={styles.container}>
            <Topbar navigation={navigation}></Topbar>
            <View style={styles.form}>
                <View>
                    <Text style={styles.text}>Booking Reference</Text>
                    <TextInput style={styles.textinput} placeholder='AAA0000' placeholderTextColor={"#686868"}></TextInput>
                </View>
                <Pressable style={styles.button} onPress={() => navigation.navigate('CheckIn', { reference: "RFC5463" })}>
                    <View>
                        <Text style={styles.buttontext}>CHECK IN</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flex: 1,
    },
    form: {
        flexDirection: "row",
        marginTop: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 14
    },
    textinput: {
        borderBottomWidth: 1,
        borderBottomColor: "#BEAD8E",
        width: 200,
        paddingTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },
    button: {
        marginTop: 10,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 40,
        backgroundColor: "#BEAD8E"
    },
    buttontext: {
        color: "#FFFFFF",
        fontWeight: "600"
    }
});
