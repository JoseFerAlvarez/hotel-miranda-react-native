import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckForm from './views/CheckForm';
import CheckIn from './views/CheckIn';
import Info from './views/Info';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='CheckForm'
          component={CheckForm}
        />
        <Stack.Screen
          name='CheckIn'
          component={CheckIn}
        />
        <Stack.Screen
          name='Info'
          component={Info}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
