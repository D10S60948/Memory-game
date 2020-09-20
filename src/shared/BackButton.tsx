import { Entypo } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { BackHandler, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BackButtonProps {
    goBack: (() => void) | undefined;
}

export default function BackButton({ goBack }: BackButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={goBack}
        >
            <Text style={styles.text}>חזור</Text>
            <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
    );
}

export function useBackHandler(handler: (() => boolean | null | undefined)) {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handler);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handler);
        };
    });
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 32,
        paddingBottom: 16
    },
    text: {
        fontSize: 24,
        fontFamily: 'Heebo-Light'
    }
})