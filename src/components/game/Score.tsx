import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../shared/consts';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import { GameType } from '../../shared/types';

export default function Score() {
    const { currentTurn: turn, score } = useSelector((state: RootState) => state.game);
    const { nicknames: { player1, player2 }, gameType } = useSelector((state: RootState) => state.general);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ניקוד</Text>
            <View style={{ flex: 1, width: '100%', flexDirection: 'row-reverse' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {turn === 0 && <View style={styles.point} />}
                    <Text style={styles.playerTitle}>{player1.length > 0 ? player1 : 'שחקן 1'}</Text>
                    <Text style={styles.score}>{score[0]}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {turn === 1 && <View style={styles.point} />}
                    <Text style={styles.playerTitle}>{gameType === GameType.COMPUTER ? 'מחשב' : player2.length > 0 ? player2 : 'שחקן 2'}</Text>
                    <Text style={styles.score}>{score[1]}</Text>
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
    },
    point: {
        position: 'absolute',
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: colors.RED,
        top: -10
    }
})