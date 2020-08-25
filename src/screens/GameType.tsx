import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Line, Selection } from '../components/gameType';
import { colors } from '../shared/consts';
import { BackButton, Title } from '../shared/index';
import { useNavigation } from '@react-navigation/native';

export default function Component() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <BackButton toScreen='Home' />
            <Title text='סוג משחק' />
            <View style={styles.selectionArea}>
                <Line />
                <Selection text='נגד המחשב' onPress={() => navigation.navigate('CategorySelect')} />
                <Line />
                <Selection text='נגד מישהו אחר על אותו המכשיר' onPress={() => console.log('ניסיון')} />
                <Line />
                <Selection text='נגד מישהו אחר מרחבי הרשת' onPress={() => console.log('ניסיון')} />
                <Line />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 15
    },
    selectionArea: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 32
    }
})