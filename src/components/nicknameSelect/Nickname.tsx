import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { colors } from '../../shared/consts';
import { useDispatch, useSelector } from 'react-redux';
import { setNickname } from '../../redux/gameSettings/actions';
import { RootState } from '../../redux';

interface NicknameProps {
    player: number;
}

export default function Nickname({ player }: NicknameProps) {
    const { nicknames: { player1, player2 } } = useSelector((state: RootState) => state.gameSettings);
    const [placeholder, setPlaceholder] = useState(`שחקן ${player.toString()}`);
    useEffect(() => {
        if (player === 1 && player1.length > 0) {
            setPlaceholder(player1);
        }
        else if (player === 2 && player2.length > 0) {
            setPlaceholder(player2);
        }
    },[player])
    const dispatch = useDispatch();
    const setName = (text: string) => dispatch(setNickname(player, text));
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.DARK_GREY}
                style={styles.input}
                onChangeText={setName}
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