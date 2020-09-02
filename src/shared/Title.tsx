import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
    text: string,
    fontSize?: number,
    marginBottom?: number
};

export default function Title({ text, fontSize = 36, marginBottom = 0 }: Props) {
    return (
        <View style={{ alignItems: 'center', marginBottom }}>
            <Text style={[styles.text, { fontSize }]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Gan',
        fontSize: 42,
        textShadowColor: 'rgba(0,0,0,.4)',
        textShadowOffset: {height: 2, width: 2},
        textShadowRadius: 10,
        lineHeight: 80,
        textAlign: 'center'
    }
})
