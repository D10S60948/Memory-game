import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { colors, shadowStyle } from '../../shared/consts';

export interface ButtonType {
    text: Array<string>;
    onPress: () => void;
}

export default function Button({ text, onPress }: ButtonType) {
    return (
        <TouchableOpacity {...{ onPress }} style={styles.container}>
            <Text style={[styles.text,{fontSize: 32}]}>{text[0]}</Text>
            <Text style={styles.text}>({text[1]})</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PURPLE,
        width: '40%',
        ...shadowStyle(4),
        borderRadius: 3,
        margin: 5,
        paddingVertical: 15
    },
    text: {
        color: 'white',
        fontFamily: 'Abraham',
        fontSize: 18,
        textAlign: 'center'
    }
})