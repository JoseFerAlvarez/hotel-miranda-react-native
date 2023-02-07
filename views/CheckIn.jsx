import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Topbar from '../components/Topbar';

export default function CheckIn({ navigation }) {
    return (
        <View style={styles.container}>
            <Topbar navigation={navigation}></Topbar>
            <Text>Check In</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flex: 1,
    }
});
