import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Line, Selection } from '../components/gameType';
import { setGameType } from '../redux/gameSettings/actions';
import { BackButton, Title } from '../shared';
import { colors } from '../shared/consts';
import { GameType } from '../shared/types';

export default function GameTypeSelect() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const select = (type: GameType) => {
        dispatch(setGameType(type));
        navigation.navigate('CategorySelect');
    }
    const againstComputer = () => select(GameType.COMPUTER);
    const sameDevice = () => select(GameType.SAME_DEVICE);
    return (
        <View style={styles.container}>
            {/* <BackButton /> */}
            <Title text='סוג משחק' marginTop={40} />
            <View style={styles.selectionArea}>
                <Line />
                <Selection text='נגד המחשב' onPress={againstComputer} />
                <Line />
                <Selection text='נגד מישהו אחר על אותו המכשיר' onPress={sameDevice} />
                <Line />
                <Selection text='נגד מישהו אחר מרחבי הרשת' onPress={() => console.log('ניסיון')} />
                <Line />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        paddingHorizontal: 15,
        paddingVertical: 30
    },
    selectionArea: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 32
    }
})