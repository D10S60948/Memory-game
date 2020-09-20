import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Nickname } from '../components/nicknameSelect';
import { RootState } from '../redux';
import { Title, WideButton } from '../shared';
import { colors } from '../shared/consts';
import { GameType } from '../shared/types';

interface NickNameSelectProps {
    goOn: () => void;
}

export default function NickNameSelect({ goOn }: NickNameSelectProps) {
    const [title, setTitle] = useState(['בחירת כינוי']);
    const { gameType } = useSelector((state: RootState) => state.gameSettings);
    useEffect(() => {
        if (gameType === GameType.SAME_DEVICE) {
            setTitle(['ראש בראש!', 'ביחרו כינויים']);
        } else {
            setTitle(['בחירת כינוי']);
        }
    }, [gameType])
    return (
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
            {title.map((title, key) => <Title text={title} fontSize={40} key={key} />)}
            <Nickname player={1} />
            {gameType === GameType.SAME_DEVICE && <Nickname player={2} />}
            <WideButton text='התחל משחק' onPress={goOn} />
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
