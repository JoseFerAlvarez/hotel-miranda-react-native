import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text>H</Text>
            </View>
            <View>
                <Image></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: transparent,
    }
    logo: {
        width: 50,
        height: 50,
        backgroundColor: "#FFFFFF",
    }
});
