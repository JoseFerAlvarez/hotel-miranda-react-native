import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Topbar from '../components/Topbar';

export default function Info({ navigation }) {
    return (
        <View style={styles.container}>
            <Topbar navigation={navigation}></Topbar>
            <View style={styles.data}>
                <Text style={styles.text}>Hotel Info</Text>
                <View>
                    <View style={styles.info}>
                        <Text style={styles.text}>Reception Phone number: +34 910 555 555</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}>ROOM Phone NUMBER: +34 910 555 556 #EXT (Room number)</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}>24H HELPLINE: +34 912 555 555</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}>Address: CALLE DE LA PRINCESA, 31. Madrid 28008</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}>EMERGENCY NUMBER: 112</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flex: 1
    },
    text: {
        fontSize: 16,
        color: "#FFFFFF"
    },
    info: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        marginLeft: "5%",
        marginRight: "5%"
    },
    data: {
        width: "100%",
        alignItems: 'center',
        marginTop: "20%"
    }
});
