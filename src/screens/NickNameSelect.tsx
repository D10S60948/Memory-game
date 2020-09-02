import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Nickname } from '../components/nicknameSelect';
import { BubblesBackground, Title, WideButton } from '../shared';
import { GameType } from '../shared/types';
import { colors } from '../shared/consts';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';

export default function NickNameSelect() {
    const navigation = useNavigation();
    const [title, setTitle] = useState(['בחירת כינוי']);
    const { gameType } = useSelector((state: RootState) => state.general);
    useEffect(() => {
        if (gameType === GameType.SAME_DEVICE) {
            setTitle(['ראש בראש!', 'ביחרו כינויים']);
        }
    }, [gameType])
    return (
        <View style={styles.container}>
            <BubblesBackground />
            <View style={{ flex: 1.2, justifyContent: 'space-evenly' }}>
                {title.map((title, key) => <Title text={title} fontSize={40} key={key} />)}
                <Nickname player={1} />
                {
                    gameType === GameType.SAME_DEVICE &&
                    <Nickname player={2} />
                }
                <WideButton text='המשך' onPress={() => navigation.navigate('Game')} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 30
    }
})
