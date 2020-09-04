import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
    text: string;
    fontSize?: number;
    marginBottom?: number;
    marginTop?: number;
};

export default function Title({ text, fontSize = 36, marginBottom = 0, marginTop = 0 }: Props) {
    return (
        <View style={{ alignItems: 'center', marginBottom, marginTop }}>
            <Text style={[styles.text, { fontSize }]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Gan',
        textShadowColor: 'rgba(0,0,0,.4)',
        textShadowOffset: {height: 2, width: 2},
        textShadowRadius: 10,
        // lineHeight: 80,
        textAlign: 'center'
    }
})
