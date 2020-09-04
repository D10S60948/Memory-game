import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Nickname } from '../components/nicknameSelect';
import { BubblesBackground, Title, WideButton, BackButton } from '../shared';
import { GameType } from '../shared/types';
import { colors } from '../shared/consts';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import Background from '../shared/Background';

export default function NickNameSelect() {
    const navigation = useNavigation();
    const [title, setTitle] = useState(['בחירת כינוי']);
    const { gameType } = useSelector((state: RootState) => state.gameSettings);
    useEffect(() => {
        if (gameType === GameType.SAME_DEVICE) {
            setTitle(['ראש בראש!', 'ביחרו כינויים']);
        }
    }, [gameType])
    return (
        <Background backButton bubbles>
            <View style={{ flex: 1.2, justifyContent: 'space-evenly' }}>
                {title.map((title, key) => <Title text={title} fontSize={40} key={key} />)}
                <Nickname player={1} />
                {
                    gameType === GameType.SAME_DEVICE &&
                    <Nickname player={2} />
                }
                <WideButton text='התחל משחק' onPress={() => navigation.navigate('Game')} />
            </View>
            <StatusBar style="auto" />
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 30
    }
})
