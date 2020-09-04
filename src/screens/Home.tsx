import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../shared/consts';
import { BubblesBackground, WideButton, Title } from '../shared';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <BubblesBackground />
            <Title text="ברוכים הבאים" />
            <Title text="למשחק הזיכרון" fontSize={64} />
            <WideButton text="התחל" onPress={() => navigation.navigate('GameTypeSelect')} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 30,
        justifyContent: 'space-around'
    }
})
