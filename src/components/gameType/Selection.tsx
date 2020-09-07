import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors, shadowStyle } from '../../shared/consts';
import Soon from './Soon';

interface SelectionProps {
    text: string;
    onPress: () => void;
    soon?: boolean;
}

export default function Selection({ text, onPress, soon = false }: SelectionProps) {
    return (
        <View style={styles.container}>
            {soon && <Soon />}
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity {...{ onPress }}
                disabled={soon}
                style={styles.button}
            >
                <Text style={styles.buttonText}>בחר</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    text: {
        fontFamily: 'Assistant',
        fontSize: 22,
        color: colors.DARK_GREY,
        flex: 1,
        paddingLeft: 30
    },
    button: {
        backgroundColor: colors.PURPLE,
        paddingVertical: 5,
        paddingHorizontal: 25,
        ...shadowStyle(3),
        borderRadius: 3,
        margin: 2
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Abraham',
        fontSize: 24
    }
})