import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Background() {
    return (
        <>
            <View style={styles.bigBubble} />
            <View style={styles.smallBubble} />
        </>
    )
}

const styles = StyleSheet.create({
    bigBubble: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,.8)',
        height: 300,
        width: 300,
        borderRadius: 200,
        top: 100,
        left: 100
    },
    smallBubble: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,.4)',
        height: 150,
        width: 150,
        borderRadius: 100,
        top: 420,
        left: -40
    }
})