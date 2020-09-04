import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedCards, setSelectedCard, removeDiscoveredCardsIndex } from '../../redux/game/actions';
import { RootState } from '../../redux/types';
import { shadowStyle } from '../../shared/consts';
import CardBack from './card/CardBack';

interface CardProps {
    height: number;
    index: number;
    width: number;
    image: any;
    value: number;
    symbol: Symbol;
}


const Card = React.forwardRef(({ image, value, height, width, index, symbol }: CardProps, ref) => {

    const dispatch = useDispatch();
    const selectedValues = useSelector((state: RootState) => state.game.selectedCardValues);
    const [shadow, setShadow] = useState(4);
    const [isFlipped, setFilpped] = useState(false);
    const [frontOpacity, setFrontOpacity] = useState(0);
    const [backOpacity, setBackOpacity] = useState(1);
    const [cardOpacity] = useState(new Animated.Value(1));
    const [isDiscovered, setDiscovered] = useState(false);

    useEffect(() => {
        resetToInitialState();
    }, [symbol])

    const resetToInitialState = () => {
        if (isFlipped) {
            flip();
        }
        setFrontOpacity(0);
        setBackOpacity(1);
        cardOpacity.setValue(1);
        setDiscovered(false);
    }

    useEffect(() => {
        if (isFlipped && selectedValues.length === 2 && isDiscovered === false) {
            setTimeout(() => {
                if (selectedValues[0] === selectedValues[1]) {
                    setDiscovered(true);
                    turnOff();
                    dispatch(removeDiscoveredCardsIndex(index));
                    // dispatch(addToDiscovoredPairs(value));
                }
                else {
                    flip();
                    if (selectedValues.length === 2) {
                        dispatch(resetSelectedCards());
                    }
                }
            }, 800);
        }
    }, [selectedValues, isFlipped])

    const switchOpacities = () => {
        setFrontOpacity(1 - frontOpacity);
        setBackOpacity(1 - backOpacity);
    }
    const rotateYValue = useRef(new Animated.Value(0)).current;
    const turnoffScaleValue = useRef(new Animated.Value(1)).current;

    const flip = () => {
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
        if (isFlipped === false && selectedValues.length < 2) {
            flip();
            dispatch(setSelectedCard(value));
        }
    }

    useImperativeHandle(ref, () => ({
        cardSelect() {
            if (isFlipped === false) {
                flip();
                dispatch(setSelectedCard(value));
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
                onPress={onCardSelect}
            >
                <Animated.View style={[styles.card, { transform: [{ rotate }, { rotateY }, { scale }] }, { ...shadowStyle(shadow) }]}>
                    <CardBack opacity={backOpacity} text='בעלי חיים' />
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