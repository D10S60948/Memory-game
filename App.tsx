import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import { RootStackParamList } from './src/shared/navigation';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    let [fontsLoaded] = useFonts({
        'Gan': require('./assets/fonts/gan.ttf'),
        'Dana': require('./assets/fonts/dana.otf'),
        'Abraham':require('./assets/fonts/abraham.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
