import React from 'react';
import { View, Text } from 'react-native';
import Topbar from '../components/Topbar';

export default function CheckIn({ navigation }) {
    return (
        <View>
            <Topbar navigation={navigation}></Topbar>
            <Text>Check In</Text>
        </View>
    )
}
