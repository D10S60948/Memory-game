import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function BackButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.goBack()}
        >
            <Text style={styles.text}>חזור</Text>
            <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
    );
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