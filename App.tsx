import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/shared/navigation';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from './src/redux/reducers';

import Home from './src/screens/Home';
import GameType from './src/screens/GameType';
import CategorySelect from './src/screens/CategorySelect';
import Game from './src/screens/Game';
import NickNameSelect from './src/screens/NickNameSelect';

const Stack = createStackNavigator<RootStackParamList>();
const store = createStore(combinedReducers);

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
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="GameType" component={GameType} />
                        <Stack.Screen name="CategorySelect" component={CategorySelect} />
                        <Stack.Screen name="Game" component={Game} />
                        <Stack.Screen name="NickNameSelect" component={NickNameSelect} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}
