import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './src/shared/navigation';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/redux';

import Home from './src/screens/Home';
import GameTypeSelect from './src/screens/GameTypeSelect';
import CategorySelect from './src/screens/CategorySelect';
import Game from './src/screens/Game';
import NickNameSelect from './src/screens/NickNameSelect';
import ScreensWrapper from './src/screens/ScreensWrapper';
import CardsAmountSelect from './src/screens/CardsAmountSelect';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    let [fontsLoaded] = useFonts({
        'Gan': require('./assets/fonts/gan.ttf'),
        'Dana': require('./assets/fonts/dana.otf'),
        'Abraham': require('./assets/fonts/abraham.ttf'),
        'Assistant': require('./assets/fonts/assistant.ttf'),
        'Heebo': require('./assets/fonts/heebo.ttf'),
        'Heebo-Light': require('./assets/fonts/heebo-light.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator headerMode='none'>
                        {/* <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="GameTypeSelect" component={GameTypeSelect} />
                        <Stack.Screen name="CategorySelect" component={CategorySelect} />
                        <Stack.Screen name="NickNameSelect" component={NickNameSelect} />
                        */}
                        <Stack.Screen name="ScreensWrapper" component={ScreensWrapper} />
                        <Stack.Screen name="Game" component={Game} />
                        {/* <Stack.Screen name="CardsAmountSelect" component={CardsAmountSelect} /> */}
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}
