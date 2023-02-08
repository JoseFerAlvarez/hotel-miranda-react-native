/**React */
import React from 'react';
/**React native */
import { View, Text, Pressable } from 'react-native';
/**Components */
import Logo from "./Logo";
/**Styles */
import { stylestopbar } from '../styles/styles';

export default function Topbar({ navigation }) {
    return (
        <View style={stylestopbar.container}>
            <View style={stylestopbar.topbar}>
                <Logo style={stylestopbar.logo}></Logo>
                <View style={stylestopbar.buttons}>
                    <Pressable onPress={() => navigation.navigate('CheckForm')}>
                        <Text style={stylestopbar.button}>Check In</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Info')}>
                        <Text style={stylestopbar.button}>Info</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
