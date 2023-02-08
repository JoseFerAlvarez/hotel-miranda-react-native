/**React */
import React, { useState, useEffect } from 'react';
/**React Native */
import { View, Text, Pressable } from 'react-native';
/**Components */
import Topbar from '../components/Topbar';
/**Helpers */
import {
    formatDate,
    getBookingPrice,
    getDays
} from "../helpers/helpers.js";
import { getBooking } from '../helpers/fetch';
/**Styles */
import { styles } from '../styles/styles';

export default function CheckIn({ navigation, route }) {

    /**States */
    const [booking, setBooking] = useState(null);
    const [message, setMessage] = useState("");

    /**If a reference was passed, fetch the booking in*/
    useEffect(() => {
        async function getOneBooking() {
            const res = await getBooking(route.params.reference);
            setBooking(res.booking);
            setMessage(res.message);
        }

        if (route.params.reference) {
            getOneBooking();
        };
    }, []);

    if (booking) {
        return (
            <View style={styles.container}>
                <Topbar navigation={navigation}></Topbar>
                <View style={styles.checkin}>
                    <Text style={styles.title}>{message}</Text>
                    <View>
                        <View style={styles.info2}>
                            <Text style={styles.text2}>Booking DETAILS</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Check In Date: {formatDate(booking.checkin)}</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Check Out Date: {formatDate(booking.checkout)}</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Days: {getDays(booking.checkin, booking.checkout)}</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}>Total Price: €{getBookingPrice(booking.checkin, booking.checkout, booking.price)}</Text>
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
