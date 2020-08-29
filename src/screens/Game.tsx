import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Card, Score, Button } from '../components/game';
import { colors } from '../shared/consts';
import { useNavigation } from '@react-navigation/native';
import { animals, mixCards } from '../components/game/DATA';

const NUMBER_OF_COLUMNS = 5;
const width = (Dimensions.get('screen').width - 50) / NUMBER_OF_COLUMNS;
const height = width * 1.05;

export default function Game() {
    const navigation = useNavigation();
    const [turn, setTurn] = useState(0);
    const [cards, setCards] = useState(new Array);
    const toggleTurn = () => setTurn(1 - turn);

    useEffect(() => {
        setCards(mixCards(animals));
    }, [animals])

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    cards && cards.map((item, index) => {
                        return (
                            <Card {...item} {...{ height, width, index }} key={index} />
                        )
                    })
                }
            </View>
            <Score />
            <View style={{ flex: 0.9, flexDirection: 'row' }} >
                <Button text='חזרה' backgroundColor={colors.RED} onPress={() => navigation.goBack()} />
                <Button text='חדש' backgroundColor={colors.PURPLE} onPress={() => console.log('do something')} />
            </View>
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