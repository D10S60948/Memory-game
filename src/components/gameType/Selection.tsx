import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, shadowStyle } from '../../shared/consts';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface SelectionProps {
    text: string;
    onPress: () => void
}

export default function Selection({text, onPress}: SelectionProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity {...{onPress}}
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