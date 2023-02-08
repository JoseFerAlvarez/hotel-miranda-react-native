/**React */
import React, { useState } from 'react';
/**React native */
import { View, Text, TextInput, Pressable } from 'react-native';
/**Components */
import Topbar from '../components/Topbar';
/**Styles */
import { styles } from "../styles/styles.js";

export default function CheckForm({ navigation }) {
    /**State */
    const [ref, setRef] = useState("");

    return (
        <View style={styles.container}>
            <Topbar navigation={navigation}></Topbar>
            <View style={styles.form}>
                <View>
                    <Text style={styles.text}>Booking Reference</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder='AAA0000'
                        placeholderTextColor={"#686868"}
                        value={ref}
                        onChangeText={setRef}></TextInput>
                </View>
                <Pressable style={styles.buttonform} onPress={() => navigation.navigate('CheckIn', { reference: ref })}>
                    <View>
                        <Text style={styles.buttontext}>CHECK IN</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}
