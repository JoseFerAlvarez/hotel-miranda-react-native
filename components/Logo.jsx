/**React */
import React from 'react';
/**React native */
import { View, Text, Image } from 'react-native';
/**Styles */
import { styleslogo } from '../styles/styles';

export default function Logo() {
    return (
        <View style={styleslogo.container}>
            <View style={styleslogo.logo}>
                <Text style={styleslogo.letter}>H</Text>
            </View>
            <Image style={styleslogo.lettermark} source={require("../assets/lettermark.png")} />
        </View>
    )
};
