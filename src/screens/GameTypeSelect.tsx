import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Line, Selection } from '../components/gameType';
import { setGameType } from '../redux/gameSettings/actions';
import { Title } from '../shared';
import { GameType } from '../shared/types';

interface GameTypeSelectProps {
    goOn: () => void;
}

export default function GameTypeSelect({ goOn }: GameTypeSelectProps) {
    const dispatch = useDispatch();
    const select = (type: GameType) => {
        dispatch(setGameType(type));
        goOn();
    }
    const againstComputer = () => select(GameType.COMPUTER);
    const sameDevice = () => select(GameType.SAME_DEVICE);
    const online = () => select(GameType.ONLINE);
    return (
        <View style={{ flex: 1 }} >
            <Title text='סוג משחק' marginTop={80} marginBottom={30} />
            <View style={styles.selectionArea}>
                <Line />
                <Selection text='נגד המחשב' onPress={againstComputer} />
                <Line />
                <Selection text='נגד מישהו אחר על אותו המכשיר' onPress={sameDevice} />
                <Line />
                <Selection text='נגד מישהו אחר מרחבי הרשת' onPress={online} soon={false} />
                <Line />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    selectionArea: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 32
    }
})