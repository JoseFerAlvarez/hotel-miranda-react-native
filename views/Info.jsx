/**React */
import React from 'react';
/**React native */
import { View, Text } from 'react-native';
/**Components */
import Topbar from '../components/Topbar';
/**Styles */
import { styles } from '../styles/styles';

export default function Info({ navigation }) {
    return (
        <View style={styles.container}>
            <Topbar navigation={navigation}></Topbar>
            <View style={styles.data}>
                <Text style={styles.title}>Hotel Info</Text>
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
