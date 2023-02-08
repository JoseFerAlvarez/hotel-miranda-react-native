import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Topbar from '../components/Topbar';

export default function CheckIn({ navigation }) {
    return (
        <View style={styles.container}>
            <Topbar navigation={navigation}></Topbar>
            <View style={styles.checkin}>
                <Text style={styles.title}>Thank you, you have successfully checked in</Text>
                <View>
                    <View style={styles.info2}>
                        <Text style={styles.text2}>Booking DETAILS</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}>Checkin Date: 12/04/22</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}>CheckOut Date: 16/04/22</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}>Number of Guests: 2</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}>Total Price: €400</Text>
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
    checkin: {
        height: "100%",
        alignItems: "center",
        marginTop: "30%"
    },
    info: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        marginLeft: "5%",
        marginRight: "5%",
        alignItems: "center"
    },
    info2: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        backgroundColor: "#FFFFFF",
        marginLeft: "5%",
        marginRight: "5%",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        color: "#FFFFFF",
        margin: 10
    },
    text2: {
        fontSize: 16,
        color: "#333333",
        margin: 10,
        fontWeight: "600"
    },
    title: {
        fontSize: 17,
        color: "#FFFFFF",
        marginBottom: 40
    },
});
