import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedCards, setSelectedCard } from '../../redux/game/actions';
import { RootState } from '../../redux';
import { shadowStyle } from '../../shared/consts';
import CardBack from './CardBack';
import { GameType } from '../../shared/types';

interface CardProps {
    height: number;
    index: number;
    width: number;
    image: any;
    value: number;
    symbol: Symbol;
    setFlippedCardsAmount: (amount: number) => void;
    flippedCardsAmount: number;
    onlineGameProps: {
        socket: SocketIOClient.Socket | null;
        gameId: number;
    }
}


const Card = React.forwardRef(({ image, value, height, width, index, symbol, setFlippedCardsAmount, flippedCardsAmount, onlineGameProps }: CardProps, ref) => {

    const dispatch = useDispatch();
    const { selectedCardValues: selectedValues, currentTurn, firstFlippedIndex } = useSelector((state: RootState) => state.game);
    const { gameType, category } = useSelector((state: RootState) => state.gameSettings);

    const [backText, setBackText] = useState('');
    const [shadow, setShadow] = useState(4);
    const [isFlipped, setFilpped] = useState(false);
    const [frontOpacity, setFrontOpacity] = useState(0);
    const [backOpacity, setBackOpacity] = useState(1);
    const [cardOpacity] = useState(new Animated.Value(1));
    const [isDiscovered, setDiscovered] = useState(false);
    const [available, setAvailability] = useState(true);

    const rotateYValue = useRef(new Animated.Value(0)).current;
    const turnoffScaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        resetToInitialState();
    }, [symbol])

    useEffect(() => {
        const computerTurn = gameType === GameType.COMPUTER && currentTurn === 1;
        const otherPlayerTurn = gameType === GameType.ONLINE && currentTurn === 1;
        setAvailability(computerTurn === false && otherPlayerTurn === false);
    }, [currentTurn])

    useEffect(() => {
        if (isFlipped && selectedValues.length === 2 && isDiscovered === false) {
            setTimeout(() => {
                if (selectedValues[0] === selectedValues[1]) {
                    setDiscovered(true);
                    turnOff();
                }
                else {
                    flip();
                    if (selectedValues.length === 2) {
                        if (index === firstFlippedIndex) {
                            dispatch(resetSelectedCards());
                        }
                    }
                }
                if (index === firstFlippedIndex) {
                    setFlippedCardsAmount(0);
                }
            }, 800);
        }
    }, [selectedValues, isFlipped])

    const resetToInitialState = () => {
        if (isFlipped) {
            flip();
        }
        _setBackText();
        setFrontOpacity(0);
        setBackOpacity(1);
        cardOpacity.setValue(1);
        setDiscovered(false);
    }

    const _setBackText = () => {
        switch (category) {
            case 'animals':
                setBackText('בעלי חיים');
                break;
            case 'cartoons':
                setBackText('דמויות מצוירות');
                break;
            case 'food':
                setBackText('אוכל');
                break;
            case 'sport':
                setBackText('ספורט');
                break;
            case 'transportation':
                setBackText('תחבורה');
                break;
        }
    }

    const switchOpacities = () => {
        setFrontOpacity(1 - frontOpacity);
        setBackOpacity(1 - backOpacity);
    }

    const flip = () => {
        if (isFlipped === false) {
            setFlippedCardsAmount(flippedCardsAmount + 1);
        }
        setShadow(0);
        Animated.timing(rotateYValue, {
            toValue: 0.5,
            duration: 100,
            useNativeDriver: true
        }).start(() => {
            switchOpacities();
            Animated.timing(rotateYValue, {
                toValue: isFlipped ? 0 : 1,
                duration: 100,
                useNativeDriver: true
            }).start(() => {
                setShadow(4);
                setFilpped(!isFlipped);
                setAvailability(true);
            })
        });
    }

    const turnOff = () => {
        Animated.sequence([
            Animated.timing(turnoffScaleValue, {
                toValue: 1.3,
                duration: 150,
                useNativeDriver: true
            }),
            Animated.parallel([
                Animated.timing(turnoffScaleValue, {
                    toValue: 0.95,
                    duration: 250,
                    delay: 100,
                    useNativeDriver: true
                }),
                Animated.timing(cardOpacity, {
                    toValue: 0.3,
                    duration: 350,
                    delay: 100,
                    useNativeDriver: true
                })
            ])
        ]).start(() => dispatch(resetSelectedCards()));
    }

    const onCardSelect = () => {
        setAvailability(false);
        if (isFlipped === false && flippedCardsAmount < 2) {
            flip();
            dispatch(setSelectedCard(value, index));
            if (gameType === GameType.ONLINE) {
                onlineGameProps.socket?.emit('selectCard', index, onlineGameProps.gameId);
            }
        }
        else {
            setAvailability(true);
        }
    }

    useImperativeHandle(ref, () => ({
        cardSelect() {
            if (isFlipped === false) {
                flip();
                dispatch(setSelectedCard(value, index));
            }
        }
    }));

    const rotateY = rotateYValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    });
    const scale = rotateYValue.interpolate({
        inputRange: [0, 0.9, 1],
        outputRange: [1, 1, 1.1]
    });

    const degreeGenerator = (num: number) => (num * 29) % 17 * (num % 2 === 0 ? -1 : 1);
    const rotate = `${degreeGenerator(index)}deg`;

    return (
        <Animated.View
            style={{ height, width, opacity: cardOpacity, transform: [{ scale: turnoffScaleValue }] }}
        >
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => available && onCardSelect()}
            >
                <Animated.View style={[styles.card, { transform: [{ rotate }, { rotateY }, { scale }] }, { ...shadowStyle(shadow) }]}>
                    <CardBack opacity={backOpacity} text={backText} />
                    <Image
                        source={image}
                        resizeMode='cover'
                        style={{ position: 'absolute', height: '100%', width: '100%', opacity: frontOpacity }}
                    />
                </Animated.View>
            </TouchableOpacity>
        </Animated.View>
    );
})

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 6,
        overflow: 'hidden'
    }
})
export default Card;