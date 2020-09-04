import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BackButton, BubblesBackground } from '.';
import { colors } from './consts';

interface BackgroundProps {
    bubbles?: boolean;
    backButton?: boolean;
    children: JSX.Element[] | JSX.Element;
}

export default function Background({ children, bubbles = false, backButton = false }: BackgroundProps) {
    return (
        <View style={styles.container}>
            {bubbles && <BubblesBackground />}
            {backButton && <BackButton />}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 30
    }
})