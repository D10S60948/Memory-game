import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { shadowStyle, colors } from '../../shared/consts';

export default function Soon() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>בקרוב</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: '15%',
        width: '70%',
        height: 60,
        backgroundColor: 'white',
        ...shadowStyle(4),
        transform: [{ rotate: '-18deg' }],
        opacity: .8,
        padding: 5
    },
    innerContainer: {
        flex: 1,
        borderColor: colors.LIGHT_GREY,
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 27,
        color: colors.DARK_GREY,
        fontFamily: 'Assistant'
    }
})