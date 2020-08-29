import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../shared/consts';

export default function Score() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ניקוד</Text>
            <View style={{ flex: 1, width: '100%', flexDirection: 'row-reverse' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.playerTitle}>שחקן 1</Text>
                    <Text style={styles.score}>5</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.playerTitle}>שחקן 2</Text>
                    <Text style={styles.score}>2</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderRadius: 8,
        borderColor: 'rgba(255,255,255,.4)',
        borderWidth: 3
    },
    title: {
        color: colors.DARK_GREY,
        marginTop: 7,
        fontFamily: 'Heebo'
    },
    playerTitle: {
        fontFamily: 'Dana',
        textDecorationLine: 'underline',
        fontSize: 22
    },
    score: {
        fontFamily: 'Gan',
        fontSize: 23,
        marginTop: 3,
        color: colors.DARK_GREY
    }
})