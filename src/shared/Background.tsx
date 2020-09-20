import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { BubblesBackground } from '.';
import { colors } from './consts';

interface BackgroundProps {
    bubbles?: boolean;
    style?: object;
    index: number;
}

export default function Background({ bubbles = false, style = {}, index }: BackgroundProps) {
    return (
        <Animated.View style={[styles.container, style, StyleSheet.absoluteFillObject]}>
            {bubbles && <BubblesBackground {...{ index }} />}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BLUE,
    }
})