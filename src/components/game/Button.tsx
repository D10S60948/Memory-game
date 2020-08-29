import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { shadowStyle } from '../../shared/consts';

interface ButtonProps {
    backgroundColor: string;
    text: string;
    onPress: () => void;
}

export default function Button({ backgroundColor, text, onPress }: ButtonProps) {
    return (
        <TouchableOpacity {...{ onPress }}
            style={[styles.container, { backgroundColor }]}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        ...shadowStyle(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    text: {
        color: 'white',
        fontFamily: 'Abraham',
        fontSize: 28
    }
})