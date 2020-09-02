import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors, shadowStyle } from './consts';

interface ButtonProps {
    text: string;
    onPress: () => void;
}

export default function WideButton({ text, onPress }: ButtonProps) {
    return (
        <TouchableOpacity {...{ onPress }}
            style={[styles.container]}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        margin: 2,
        backgroundColor: colors.PURPLE,
        ...shadowStyle(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    text: {
        color: 'white',
        fontFamily: 'Abraham',
        fontSize: 32
    }
})