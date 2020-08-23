import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>משחק</Text>
            <Text style={styles.text}>הזיכרון</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Gan',
        fontSize: 60,
        lineHeight: 80
    }
})