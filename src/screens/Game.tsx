import { useNavigation } from '@react-navigation/native';
import React, { createRef, useEffect, useState } from 'react';
import { ActivityIndicator, BackHandler, Dimensions, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { socketUrl } from '../../config';
import { Button, Card, Score, WinningPopup } from '../components/game';
import { animals, cartoons, food, mixCards, sport, transportation } from '../components/game/DATA';
import { RootState } from '../redux';
import { resetGame, setTurn } from '../redux/game/actions';
import { setCategory, setNickname, setNumberOfCardPairs } from '../redux/gameSettings/actions';
import { CategoryType } from '../redux/gameSettings/types';
import { colors, shadowStyle } from '../shared/consts';
import { GameType } from '../shared/types';

export default function Game() {

    const navigation = useNavigation();

    const dispatch = useDispatch();
    const { discoveredPairs, unselectedCardsIndex, currentTurn } = useSelector((state: RootState) => state.game);
    const { gameType, numberOfPairs, category, nicknames } = useSelector((state: RootState) => state.gameSettings);

    const [cards, setCards] = useState(new Array);
    const [cardsRefs, setCardsRefs] = useState(new Array);
    const [flippedCardsAmount, setFlippedCardsAmount] = useState(0);
    const [symbol, setSymbol] = useState<Symbol>();
    const [isWinningModalVisible, setWinningModalVisibility] = useState(false);
    const [otherPlayerDiconnected, setOtherPlayerDiconnected] = useState(false);

    const [ready, setReady] = useState(false);
    const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

    const [waitingToOtherPlayer, setWaiting] = useState(false);
    const [gameId, setGameId] = useState(0);

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const columnsAmount = numberOfPairs === 10 ? 4 : 5;
        const width = (Dimensions.get('screen').width - 50) / columnsAmount;
        const height = width * (columnsAmount === 5 ? 1.05 : 1.02);
        setWidth(width);
        setHeight(height);
    }, [numberOfPairs])

    useEffect(() => {
        if (gameType === GameType.ONLINE) {
            setWaiting(true);
            reset();
            const socket = io(socketUrl);
            socket.emit('join', nicknames.player1, category, numberOfPairs);
            setSocket(socket);
            socket.on('setSettings', (gameId: number, isFirst: boolean) => {
                const onlinePlayerId = isFirst ? 1 : 2;
                if (isFirst) {
                    const mixedCards = setMixedCards();
                    setGameCards(mixedCards);
                    socket.emit('setGameCards', mixedCards);
                } else {
                    dispatch(setTurn(1));
                    socket.on('setGameSettings', (cards: object[], category: CategoryType, numberOfPairs: number) => {
                        dispatch(setCategory(category));
                        dispatch(setNumberOfCardPairs(numberOfPairs));
                        setGameCards(cards);
                        socket.emit('readyToStart', gameId);
                    })
                }
                setGameId(gameId);
                socket.on('startGame', (nicknames: string[]) => {
                    dispatch(setNickname(2, nicknames[2 - onlinePlayerId]));
                    setReady(true);
                    setWaiting(false);
                })
                socket.on('gameEnd', () => {
                    setOtherPlayerDiconnected(true);
                    setWinningModalVisibility(true);
                })
                BackHandler.addEventListener('hardwareBackPress', () => {
                    socket?.disconnect();
                    return false;
                })
            })
        }
        else {
            restartGame();
            setReady(true);
        }
    }, []);

    useEffect(() => {
        if (cardsRefs && cardsRefs.length > 0) {
            socket?.on('cardSelect', (index: number) => {
                cardsRefs[index].current.cardSelect();
            });
        }
    }, [cardsRefs])

    const restartGame = () => {
        reset();
        const mixedCards = setMixedCards();
        setGameCards(mixedCards);
    }

    const setMixedCards = () => {
        const data = getCardsData();
        const mixedCards = mixCards(data.slice(0, numberOfPairs));
        return mixedCards;
    }

    const setGameCards = (mixedCards: object[]) => {
        setCards(mixedCards);
        const _cardsRefs: any = Array(mixedCards.length).fill().map((_, i) => cardsRefs[i] || createRef());
        setCardsRefs(_cardsRefs);
    }

    const getCardsData = () => {
        switch (category) {
            case 'animals':
                return animals;
            case 'food':
                return food;
            case 'sport':
                return sport;
            case 'transportation':
                return transportation;
            case 'cartoons':
                return cartoons;
        }
    }

    useEffect(() => {
        if (numberOfPairs > 0 && discoveredPairs === numberOfPairs) {
            setTimeout(() => {
                setWinningModalVisibility(true);
                setTimeout(() => {
                    setReady(false);
                    setWinningModalVisibility(false);
                    if (gameType === GameType.ONLINE) {
                        navigation.navigate('GameTypeSelect');
                    }
                    restartGame();
                }, 3000);
            }, 1000);
        }
        const isComputerTurn = gameType === GameType.COMPUTER && currentTurn === 1 && discoveredPairs < numberOfPairs;
        if (isComputerTurn) {
            setTimeout(() => {
                var firstSelection = computerCardSelect(-1);
                setTimeout(() => {
                    computerCardSelect(firstSelection);
                }, 300);
            }, 1800);
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
        setFlippedCardsAmount(0);
        dispatch(resetGame(numberOfPairs));
        setSymbol(Symbol());
    }

    const goBack = () => {
        if(gameType === GameType.ONLINE) {
            socket?.disconnect();
        }
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            {
                cards && cards.length > 0 ?
                    ready && !waitingToOtherPlayer ?
                        <React.Fragment>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {
                                    cards.map((item, index) => {
                                        return (
                                            <Card {...item} {...{ height, width, index, symbol, setFlippedCardsAmount, flippedCardsAmount }}
                                                ref={cardsRefs[index]}
                                                key={index}
                                                onlineGameProps={{
                                                    socket: gameType === GameType.ONLINE ? socket : null,
                                                    gameId
                                                }}
                                            />
                                        )
                                    })
                                }
                            </View>
                            <Score />
                            <View style={{ flex: 0.9, flexDirection: 'row' }} >
                                <Button text='חזרה' backgroundColor={colors.RED} onPress={goBack} />
                                <Button text='חדש' backgroundColor={colors.PURPLE} onPress={restartGame} />
                            </View>
                            <WinningPopup isVisible={isWinningModalVisible} {...{ otherPlayerDiconnected }} />
                        </React.Fragment>
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ paddingHorizontal: 30, paddingVertical: 40, backgroundColor: 'white', ...shadowStyle(4), margin: 5 }}>
                                <Text style={styles.text}>ממתינים להצטרפות של השחקן הנוסף</Text>
                                <ActivityIndicator size='large' color='purple' />
                            </View>
                        </View>
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
    },
    text: {
        fontFamily: 'Abraham',
        color: colors.DARK_GREY,
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 15
    }
})