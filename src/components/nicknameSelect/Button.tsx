import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors, shadowStyle } from '../../shared/consts';
import { useNavigation } from '@react-navigation/native';

export default function Button() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={[styles.container]}
            onPress={() => navigation.navigate('GameType')}
        >
            <Text style={styles.text}>המשך</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        margin: 2,
        backgroundColor: colors.PURPLE,
        ...shadowStyle(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    text: {
        color: 'white',
        fontFamily: 'Abraham',
        fontSize: 32
    }
})