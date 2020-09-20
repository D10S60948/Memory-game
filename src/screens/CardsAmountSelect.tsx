import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ButtonType } from '../components/cardAmountSelect';
import { Line } from '../components/gameType';
import { setNumberOfCardPairs } from '../redux/gameSettings/actions';
import { Title } from '../shared';
import { colors } from '../shared/consts';

interface CardsAmountSelectProps {
    goOn: () => void;
}

export default function CardsAmountSelect({ goOn }: CardsAmountSelectProps) {

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const select = (pairs: number) => {
        dispatch(setNumberOfCardPairs(pairs));
        goOn();
    }

    const buttons: Array<ButtonType> = [
        {
            text: [
                '20',
                '10 זוגות'
            ],
            onPress: () => select(10)
        },
        {
            text: [
                '30',
                '15 זוגות'
            ],
            onPress: () => select(15)
        }
    ]

    return (
        <View style={{ flex: 1 }}>
            <Title text='כמה קלפים ?' marginBottom={32} marginTop={30} />
            <Line />
            <View style={styles.selectionArea}>
                {
                    buttons.map((button: ButtonType, key) => {
                        const { text, onPress } = button;
                        return <Button {...{ onPress, text, key }} />;
                    })
                }
            </View>
            <Line />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 30
    },
    selectionArea: {
        paddingHorizontal: 10,
        paddingVertical: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})