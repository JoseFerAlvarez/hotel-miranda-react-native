import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Topbar from '../components/Topbar';

export default function CheckIn({ navigation, route }) {

    const [booking, setBooking] = useState(null);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzZDkyNDBhNjg2MmZkYjQ3NzgzNzIwMSIsImVtYWlsIjoiam9zZWZlcmFsdmFyZXpyb21lcm9AZ21haWwuY29tIn0sImlhdCI6MTY3NTE4MDIwMn0.dY3N6SOv6HB2H0Pjnz1BCuMTVnbSjg98f2pflTtaCaE";

    useEffect(async () => {
        if (route.params.reference) {
            setBooking(await getBooking());
        };
    }, []);

    const getBooking = async () => {
        const response = await fetch(`http://localhost:3001/bookings/search/${route.params.reference}`, {
            method: 'POST',
            mode: "cors",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: null
        })

        const json = await response.json();
        return json.booking;
    }

    if (booking) {
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
                            <Text style={styles.text}>Checkin Date: {booking.checkin}</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>CheckOut Date: {booking.checkout}</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Number of Guests: 2</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Total Price: €400</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Reference: {route.params.reference}</Text>
                        </View>
                    </View>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('CheckForm')}>
                        <View>
                            <Text style={styles.buttontext}>DONE</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Topbar navigation={navigation}></Topbar>
                <View style={styles.checkin}>
                    <Text style={styles.title}>Booking not found</Text>
                </View>
            </View>
        );
    }
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
    button: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 40,
        backgroundColor: "#BEAD8E",
        width: 150
    },
    buttontext: {
        color: "#FFFFFF",
        fontWeight: "600"
    }
});
