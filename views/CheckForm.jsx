import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Topbar from '../components/Topbar';

export default function CheckForm({ navigation }) {
    return (
        <View style={styles.container}>
            <Topbar navigation={navigation}></Topbar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flex: 1,
    }
});
