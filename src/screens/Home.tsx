import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Title, WideButton } from '../shared';
import Background from '../shared/Background';

export default function Home() {
    const navigation = useNavigation();
    return (
        <Background bubbles style={{ justifyContent: 'space-around' }}>
            <Title text="ברוכים הבאים" />
            <Title text="למשחק הזיכרון" fontSize={64} />
            <WideButton text="התחל" onPress={() => navigation.navigate('GameTypeSelect')} />
            <StatusBar style="auto" />
        </Background>
    );
}
