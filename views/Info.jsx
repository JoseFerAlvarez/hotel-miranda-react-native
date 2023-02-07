import React from 'react';
import { View, Text } from 'react-native';
import Topbar from '../components/Topbar';

export default function Info({ navigation }) {
    return (
        <View>
            <Topbar navigation={navigation}></Topbar>
            <Text>Info</Text>
        </View>
    )
}
