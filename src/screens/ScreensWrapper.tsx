import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Easing, View } from 'react-native';
import { useBackHandler } from '../shared/BackButton';
import Background from '../shared/Background';
import { NavigationDirection } from '../shared/types';
import CardsAmountSelect from './CardsAmountSelect';
import CategorySelect from './CategorySelect';
import GameTypeSelect from './GameTypeSelect';
import Home from './Home';
import NickNameSelect from './NickNameSelect';
import Screen from './Screen';

const { width, height } = Dimensions.get('screen');

export default function ScreensWrapper() {

    const navigation = useNavigation();

    const translateX = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(0);

    const backHandlerBackAction = () => {
        goBack();
        return true;
    }

    const moveScreen = (moveTo: NavigationDirection) => {
        var toValue = index;
        if (moveTo === NavigationDirection.BACK && index > 0) {
            toValue = index - 1;
        } else if (moveTo === NavigationDirection.FORWARD) {
            if (index < 4) {
                toValue = index + 1;
            } else {
                navigation.navigate('Game');
            }
        }
        slide(toValue * -width);
        setIndex(toValue);
    }
    const goOn = () => moveScreen(NavigationDirection.FORWARD);
    const goBack = () => moveScreen(NavigationDirection.BACK);
    useBackHandler(backHandlerBackAction);

    const slide = (toValue: number) => {
        Animated.timing(translateX, {
            toValue,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease)
        }).start();
    }

    return (
        <View>
            <Background bubbles
                index={index}
                style={{ width, height }}
            />
            <Animated.View
                style={[
                    { width: width * 5, height, flexDirection: 'row' },
                    { transform: [{ translateX }] }
                ]}
            >
                {/* <StatusBar /> */}
                <Screen isFocused={index === 0}>
                    <Home {...{ goOn }} />
                </Screen>
                <Screen isFocused={index === 1}>
                    <GameTypeSelect {...{ goOn }} />
                </Screen>
                <Screen {...{ goBack }} backButton isFocused={index === 2} >
                    <CategorySelect {...{ goOn }} />
                </Screen>
                <Screen {...{ goBack }} backButton isFocused={index === 3} >
                    <CardsAmountSelect {...{ goOn }} />
                </Screen>
                <Screen {...{ goBack }} backButton isFocused={index === 4} >
                    <NickNameSelect {...{ goOn }} />
                </Screen>
            </Animated.View>
        </View>
    );
}
