import { useNavigation } from '@react-navigation/native';
import React, { createRef, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Score, WinningPopup } from '../components/game';
import { animals, mixCards } from '../components/game/DATA';
import { RootState } from '../redux';
import { resetGame } from '../redux/game/actions';
import { colors } from '../shared/consts';
import { GameType } from '../shared/types';

export default function Game() {

    const navigation = useNavigation();

    const dispatch = useDispatch();
    const { discoveredPairs, unselectedCardsIndex, currentTurn } = useSelector((state: RootState) => state.game);
    const { gameType, numberOfPairs } = useSelector((state: RootState) => state.gameSettings);

    const [cards, setCards] = useState(new Array);
    const [cardsRefs, setCardsRefs] = useState(new Array);
    const [flippedCardsAmount, setFlippedCardsAmount] = useState(0);
    const [symbol, setSymbol] = useState<Symbol>();
    const [isWinningModalVisible, setWinningModalVisibility] = useState(false);

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [numberOfColumns, setNumberOfColumns] = useState(0);

    useEffect(() => {
        const columnsAmount = numberOfPairs === 10 ? 4 : 5;
        const width = (Dimensions.get('screen').width - 50) / columnsAmount;
        const height = width * (columnsAmount === 5 ? 1.05 : 1.02);
        setNumberOfColumns(columnsAmount);
        setWidth(width);
        setHeight(height);
    }, [numberOfPairs])

    useEffect(() => {
        restartGame();
    }, []);

    const restartGame = () => {
        setFlippedCardsAmount(0);
        dispatch(resetGame(numberOfPairs));
        setSymbol(Symbol());
        const mixedCards = mixCards(animals.slice(0, numberOfPairs));
        setCards(mixedCards);
        setCardsRefs(cardsRefs => Array(mixedCards.length).fill().map((_, i) => cardsRefs[i] || createRef()));
    }

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
        const isComputerTurn = gameType === GameType.COMPUTER && currentTurn === 1 && discoveredPairs < numberOfPairs;
        if (isComputerTurn) {
            setTimeout(() => {
                var firstSelection = computerCardSelect(-1);
                setTimeout(() => {
                    computerCardSelect(firstSelection);
                }, 500);
            }, 2000);
        }
    }, [currentTurn, discoveredPairs])
    const computerCardSelect = (firstSelection: number) => {
        var randomNumber = Math.floor(Math.random() * unselectedCardsIndex.length);
        while (randomNumber === firstSelection) {
            randomNumber = Math.floor(Math.random() * unselectedCardsIndex.length);
        }
        cardsRefs[unselectedCardsIndex[randomNumber]].current.cardSelect();
        return randomNumber;
    }

    const reset = () => {
        restartGame();
    }

    return (
        <View style={styles.container}>
            {
                cards && cards.length > 0 ?
                    <React.Fragment>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                cards.map((item, index) => {
                                    return (
                                        <Card ref={cardsRefs[index]} {...item} {...{ height, width, index, symbol, setFlippedCardsAmount, flippedCardsAmount }} key={index} />
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
                    </React.Fragment>
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size='large' color='purple' />
                    </View>
            }
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