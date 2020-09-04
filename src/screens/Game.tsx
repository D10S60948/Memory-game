import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef, createRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, Card, Score, WinningPopup } from '../components/game';
import { animals, mixCards } from '../components/game/DATA';
import { colors } from '../shared/consts';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/types';
import { resetGame } from '../redux/game/actions';
import { GameType } from '../shared/types';

const NUMBER_OF_COLUMNS = 5;
const width = (Dimensions.get('screen').width - 50) / NUMBER_OF_COLUMNS;
const height = width * 1.05;

export default function Game() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [cards, setCards] = useState(new Array);
    const { discoveredPairs, unselectedCardsIndex } = useSelector((state: RootState) => state.game);
    const [symbol, setSymbol] = useState<Symbol>();
    const [isWinningModalVisible, setWinningModalVisibility] = useState(false);
    const [cardsRefs, setCardsRefs] = useState(new Array);
    const [firstCopmuterSelection, setFirstCopmuterSelection] = useState(-1);
    const { currentTurn } = useSelector((state: RootState) => state.game);
    const { gameType } = useSelector((state: RootState) => state.general);

    useEffect(() => {
        dispatch(resetGame());
        setSymbol(Symbol());
        const mixedCards = mixCards(animals);
        setCards(mixedCards);
        setCardsRefs(cardsRefs => Array(mixedCards.length).fill().map((_, i) => cardsRefs[i] || createRef()));
    }, [])

    useEffect(() => {

    })

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

    useEffect(() => {
        const isComputerTurn = gameType === GameType.COMPUTER && currentTurn === 1 && discoveredPairs < cards.length / 2;
        if (isComputerTurn) {
            setTimeout(() => {
                computerCardSelect();
                setTimeout(() => {
                    computerCardSelect();
                }, 500);
            }, 1700);
        }
    }, [currentTurn, discoveredPairs])
    const computerCardSelect = () => {
        var randomNumber = Math.floor(Math.random() * unselectedCardsIndex.length);
        setFirstCopmuterSelection(firstCopmuterSelection > 0 ? randomNumber : -1);
        while (randomNumber === firstCopmuterSelection) {
            randomNumber = Math.floor(Math.random() * unselectedCardsIndex.length);
        }
        console.log(randomNumber, unselectedCardsIndex.length)
        cardsRefs[unselectedCardsIndex[randomNumber]].current.cardSelect();
    }

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
                            <Card ref={cardsRefs[index]} {...item} {...{ height, width, index, symbol }} key={index} />
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