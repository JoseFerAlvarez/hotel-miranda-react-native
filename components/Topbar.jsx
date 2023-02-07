import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from "./Logo";
import { Button } from 'react-native';

export default function Topbar({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <Logo style={styles.logo}></Logo>
                <View>
                    <Button title="CheckForm" onPress={() =>
                        navigation.navigate('CheckForm')
                    }></Button>
                    <Button title="Info" onPress={() =>
                        navigation.navigate('Info')
                    }></Button>
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
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: "row"
    }
});
