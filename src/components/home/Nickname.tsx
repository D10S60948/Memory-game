import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { colors } from '../../shared/consts';

export default function Nickname() {
    const [nickname, setNickname] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='בחר כינוי'
                placeholderTextColor={colors.DARK_GREY}
                style={styles.input}
                onChangeText={text => setNickname(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: 'rgba(200,200,200,.5)',
        padding: 15
    },
    input: {
        height: 50,
        borderBottomColor: colors.DARK_GREY,
        borderBottomWidth: 1,
        textAlign: 'center',
        fontSize: 32,
        color: colors.DARK_GREY,
        fontFamily: 'Dana'
    }
})