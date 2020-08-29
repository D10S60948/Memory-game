import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../../shared/consts';

interface CardBackProps {
    opacity: number;
    text: string;
}

export default function CardBack({ opacity, text }: CardBackProps) {
    return (
        <View style={[styles.container, { opacity }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 3,
        borderColor: colors.VERY_LIGHT_GREY,
        borderRadius: 6,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.LIGHT_GREY,
        fontSize: 11,
        textAlign: 'center'
    }
})