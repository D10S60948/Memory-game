import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { shadowStyle } from '../../shared/consts';
import CardBack from './card/CardBack';

interface CardProps {
    height: number;
    index: number;
    width: number;
    image: any;
    value: number;
}

export default function Card({ image, value, height, width, index }: CardProps) {

    const [text, setText] = useState('בעלי חיים');
    const [shadow, setShadow] = useState(4);
    const [isFlipped, setFilpped] = useState(false);
    const [outOfGame, setOutOfGame] = useState(false);
    const [frontOpacity, setFrontOpacity] = useState(0);
    const [backOpacity, setBackOpacity] = useState(1);

    const switchOpacities = () => {
        setFrontOpacity(1 - frontOpacity);
        setBackOpacity(1 - backOpacity);
    }
    const rotateYValue = useRef(new Animated.Value(0)).current;

    const flip = () => {
        setShadow(0);
        Animated.timing(rotateYValue, {
            toValue: 0.5,
            duration: 150,
            useNativeDriver: true
        }).start(() => {
            switchOpacities();
            Animated.timing(rotateYValue, {
                toValue: isFlipped ? 0 : 1,
                duration: 150,
                useNativeDriver: true
            }).start(() => {
                setShadow(4);
                setFilpped(!isFlipped);
            })
        });
    }

    const onCardSelect = () => {
        flip();
    }

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
        <TouchableOpacity
            onPress={onCardSelect}
            style={{ height, width }}
        >
            <Animated.View style={[styles.card, { transform: [{ rotate }, { rotateY }, {scale}] }, { ...shadowStyle(shadow) }]}>
                <CardBack opacity={backOpacity} text='בעלי חיים' />
                <Image
                    source={image}
                    resizeMode='cover'
                    style={{ position: 'absolute', height: '100%', width: '100%', opacity: frontOpacity }}
                />
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 6,
        overflow:'hidden'
    }

})