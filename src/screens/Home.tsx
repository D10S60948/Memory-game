import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../shared/consts';
import { Button, Nickname, Background, Title } from '../components/home';

export default function Home() {
    return (
        <View style={styles.container}>
            <Background />
            <Title />
            <View style={{ flex: 1.2, justifyContent: 'space-around' }}>
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
