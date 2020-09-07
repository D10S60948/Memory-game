import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../shared/consts';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

interface CardBackProps {
    opacity: number;
    text: string;
}

export default function CardBack({ opacity, text }: CardBackProps) {
    const [fontSize, setFontSize] = useState(11);
    const { numberOfPairs } = useSelector((state: RootState) => state.gameSettings);
    useEffect(() => {
        setFontSize(numberOfPairs === 10 ? 11 : 9);
    }, [numberOfPairs])
    return (
        <View style={[styles.container, { opacity }]}>
            <Text style={[styles.text, { fontSize }]}>{text}</Text>
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
        textAlign: 'center'
    }
})