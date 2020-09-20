import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import BackButton from '../shared/BackButton';

const { width, height } = Dimensions.get('window');

interface ScreenProps {
    isFocused: boolean;
    children: JSX.Element[] | JSX.Element;
    backButton?: boolean;
    goBack?: () => void;
}

export default function Screen({ isFocused, children, goBack, backButton = false }: ScreenProps) {

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const opacityTo = isFocused ? 1 : 0;
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: opacityTo,
                duration: 400,
                useNativeDriver: true
            })
        ]).start();
    }, [isFocused])
    const rotateY = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: ['90deg', '0deg']
    });
    return (
        <Animated.View
            style={[
                { height, width, opacity, padding: 25 },
                { transform: [{ rotateY }] }
            ]}
        >
            {backButton && <BackButton {...{ goBack }} />}
            {children}
        </Animated.View>
    );
}
