import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Background from '../components/home/Background';
import Title from '../components/home/Title';
import { RootStackParamList, StackNavigationProps } from '../shared/navigation';
import { colors } from '../shared/consts';
import Nickname from '../components/home/Nickname';
import Button from '../components/home/Button';

export default function Home({ navigation }: StackNavigationProps<RootStackParamList, 'Home'>) {
    return (
        <View style={styles.container}>
            <Background />
            <Title />
            <View style={{ flex: 1.2 }}>
                <Nickname />
                <Button />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 30
    }
})
