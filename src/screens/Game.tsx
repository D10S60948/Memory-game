import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, Card, Score, WinningPopup } from '../components/game';
import { animals, mixCards } from '../components/game/DATA';
import { colors } from '../shared/consts';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/types';
import { resetGame } from '../redux/game/actions';

const NUMBER_OF_COLUMNS = 5;
const width = (Dimensions.get('screen').width - 50) / NUMBER_OF_COLUMNS;
const height = width * 1.05;

export default function Game() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [cards, setCards] = useState(new Array);
    const { discoveredPairs } = useSelector((state: RootState) => state.game);
    const [symbol, setSymbol] = useState<Symbol>();
    const [isWinningModalVisible, setWinningModalVisibility] = useState(false);

    useEffect(() => {
        setSymbol(Symbol());
        setCards(mixCards(animals));
    }, [])

    useEffect(() => {
        if (cards.length > 0 && discoveredPairs === cards.length / 2) {
            setTimeout(() => {
                setWinningModalVisibility(true);
                setTimeout(() => {
                    setWinningModalVisibility(false);
                    reset();
                }, 3500);
            }, 1000);
        }
    }, [discoveredPairs])

    const reset = () => {
        setCards(mixCards(animals));
        setSymbol(Symbol());
        dispatch(resetGame());
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    cards.map((item, index) => {
                        return (
                            <Card {...item} {...{ height, width, index, symbol }} key={index} />
                        )
                    })
                }
            </View>
            <Score />
            <View style={{ flex: 0.9, flexDirection: 'row' }} >
                <Button text='חזרה' backgroundColor={colors.RED} onPress={() => navigation.goBack()} />
                <Button text='חדש' backgroundColor={colors.PURPLE} onPress={reset} />
            </View>
            <WinningPopup isVisible={isWinningModalVisible} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        paddingHorizontal: 25,
        paddingTop: 35,
        paddingBottom: 10
    }
})