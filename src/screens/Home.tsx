import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Title, WideButton } from '../shared';

interface HomeProps {
    goOn: () => void;
}

export default function Home({ goOn }: HomeProps) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <Title text="ברוכים הבאים" />
            <Title text="למשחק הזיכרון" fontSize={64} />
            <WideButton text="התחל" onPress={goOn} />
            <StatusBar style="auto" />
        </View>
    );
}
