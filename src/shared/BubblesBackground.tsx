import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

interface BubblesBackgroundProps {
    index: number;
}
const CHANGE_SIZE = 60;
const duration = 500;

export default function BubblesBackground({ index }: BubblesBackgroundProps) {
    const translateBig = useRef(new Animated.ValueXY()).current;
    const translateSmall = useRef(new Animated.ValueXY()).current;
    const opacityBig = useRef(new Animated.Value(.6)).current;
    const opacitySmall = useRef(new Animated.Value(.6)).current;
    useEffect(() => {
        const bigX = index > 0 ? Math.random() * CHANGE_SIZE * 2 - CHANGE_SIZE : 0;
        const bigY = index > 0 ? Math.random() * CHANGE_SIZE * 2 - CHANGE_SIZE : 0;
        const smallX = index > 0 ? Math.random() * CHANGE_SIZE * 2 - CHANGE_SIZE : 0;
        const smallY = index > 0 ? Math.random() * CHANGE_SIZE * 2 - CHANGE_SIZE : 0;
        Animated.parallel([
            Animated.timing(translateBig, {
                toValue: { x: bigX, y: bigY },
                duration,
                useNativeDriver: true
            }),
            Animated.timing(translateSmall, {
                toValue: { x: smallX, y: smallY },
                duration,
                useNativeDriver: true
            }),
            Animated.timing(opacityBig, {
                toValue: index % 2 === 0 ? 0.8 : 0.4,
                duration,
                useNativeDriver: true
            }),
            Animated.timing(opacitySmall, {
                toValue: index % 2 === 0 ? 0.4 : 0.8,
                duration,
                useNativeDriver: true
            })
        ]).start();
    }, [index])
    return (
        <React.Fragment>
            <Animated.View
                style={[
                    styles.bigBubble,
                    { opacity: opacityBig },
                    {
                        transform: [
                            { translateX: translateBig.x },
                            { translateY: translateBig.y }
                        ]
                    }
                ]}
            />
            <Animated.View
                style={[
                    styles.smallBubble,
                    { opacity: opacitySmall },
                    {
                        transform: [
                            { translateX: translateSmall.x },
                            { translateY: translateSmall.y }
                        ]
                    }
                ]}
            />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    bigBubble: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 300,
        width: 300,
        borderRadius: 200,
        top: 100,
        left: 100
    },
    smallBubble: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 150,
        width: 150,
        borderRadius: 100,
        top: 420,
        left: -40
    }
})